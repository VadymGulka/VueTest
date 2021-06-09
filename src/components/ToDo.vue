<template>
    <div class="container">
        <h1>Todo list</h1>
        <div class="row">
            <div class="col">
                <input
                    @input="search"
                    class="form-input"
                    type="text"
                    v-model="searchString"
                    placeholder="Search..."
                />
                <input class="form-input" type="text" v-model="input" placeholder="Add todo..." />
                <button class="button" @click="addTodo()">Add todo</button>

                <template v-for="(tag, i) in tags" :key="tag">
                    <input v-model="tags[i].checked" type="checkbox" />{{ tag.name }}
                </template>
            </div>
            <div class="col">
                <span class="h1">Stats: {{ completed + "/" + todos.length }}</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{ width: width }">{{ width }}</div>
                </div>
            </div>
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#<input @change="checkAll" v-model="checkmarkAll" type="checkbox" /></th>
                    <th>ID</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th colspan="2">Tags</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo">
                    <td><input type="checkbox" v-model="todo.checked" /></td>
                    <td @click="copy(todo.id)">
                        {{ todo.id }}
                        <input :ref="todo.id" type="hidden" :value="todo.id" />
                    </td>
                    <td>{{ todo.data }}</td>
                    <td>{{ todo.date }}</td>
                    <td>{{ todo.tags }}</td>
                    <td><button @click="removeTodo(todo.id)" class="btn btn-danger">Remove</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import _ from "lodash";
function newTodo(input, tags) {
    (this.checked = false),
        (this.id = Math.random().toString(36).substr(2, 9)),
        (this.data = input),
        (this.date = new Date().toLocaleString()),
        (this.tags = tags);
}
export default {
    data() {
        return {
            searchString: null,
            checkmarkAll: null,
            todos: [],
            savedTodos: [
                {
                    checked: true,
                    id: "o71nux3kl",
                    data: "Task1",
                    date: "6/3/2021, 3:06:59 PM",
                    tags: ["Vue"],
                },
                {
                    checked: true,
                    id: "a1m3h315v",
                    data: "Task2",
                    date: "6/3/2021, 3:07:07 PM",
                    tags: ["Javascript"],
                },
                {
                    checked: false,
                    id: "gvawczuab",
                    data: "Task3",
                    date: "6/3/2021, 3:07:13 PM",
                    tags: ["Javascript", "Vue"],
                },
                {
                    checked: true,
                    id: "ph8snoen3",
                    data: "Task4",
                    date: "6/3/2021, 3:07:18 PM",
                    tags: ["Vue"],
                },
            ],
            input: null,
            tags: [
                { name: "Javascript", checked: false },
                { name: "Vue", checked: false },
                { name: "HTML", checked: false },
            ],
        };
    },
    computed: {
        completed() {
            let comp = 0;
            this.todos.forEach((todo) => {
                if (todo.checked) {
                    comp++;
                }
            });
            return comp;
        },
        width() {
            let p = Math.round((this.completed / this.todos.length) * 100);
            return isNaN(p) ? 0 : p + "%";
        },
        enabledTags() {
            let enabled = [];
            this.tags.forEach((item) => {
                if (item.checked) {
                    enabled.push(item.name);
                }
            });
            return enabled;
        },
    },
    watch: {
        completed(newValue) {
            if (newValue == this.todos.length) {
                this.checkmarkAll = true;
            } else {
                this.checkmarkAll = false;
            }
        },
    },
    created() {
        this.showOrderedTodos();
    },
    methods: {
        search() {
            if (this.searchString == "") {
                this.showOrderedTodos();
                return null;
            }
            this.todos = [];
            for (var i = this.savedTodos.length - 1; i >= 0; i--) {
                if (!this.savedTodos[i].data.toLowerCase().search(this.searchString.toLowerCase())) {
                    this.todos.push(this.savedTodos[i]);
                }
            }
        },
        checkAll() {
            if (this.checkmarkAll) {
                this.todos.forEach((todo) => (todo.checked = true));
            }
            if (!this.checkmarkAll) {
                this.todos.forEach((todo) => (todo.checked = false));
            }
        },
        copy(id) {
            let cop = this.$refs[id];
            cop.setAttribute("type", "text");
            cop.focus();
            cop.select();
            document.execCommand("copy");
            cop.setAttribute("type", "hidden");
        },
        showOrderedTodos() {
            this.todos = this.savedTodos.slice().reverse();
        },
        removeTodo(id) {
            this.todos = this.todos.filter((value) => value.id != id);
        },
        addTodo() {
            let todo = new newTodo(this.input, this.enabledTags);
            if (todo.data != null) {
                this.savedTodos.push(todo);
                this.input = null;
            }
            this.showOrderedTodos();
        },
    },
};
</script>




<style lang="sass" scoped>
input
	margin-left: 20px
</style>

