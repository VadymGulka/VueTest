<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Todo list</h1>
                <input class="form-input" type="text" v-model="input" placeholder="Add todo..." />
                <button class="button" @click="addTodo()">Add todo</button>
            </div>

            <span v-for="(tag, i) in tags" :key="tag">
                <input v-model="tags[i].checked" type="checkbox" />{{ tag.name }}
            </span>
            <div class="col"></div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th colspan="2">Tags</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in showtodos" :key="todo">
                    <td>{{ "a" }}</td>
                    <td>{{ todo.id }}</td>
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
export default {
    data() {
        return {
            todos: [
                { id: 1, data: "Task4", date: "6/1/2021, 5:34:09 PM", tags: ["Javascript", "HTML"] },
                { id: 2, data: "Task2", date: "6/1/2021, 5:34:00 PM", tags: ["Javascript"] },
                { id: 3, data: "Task1", date: "6/1/2021, 5:33:57 PM", tags: ["Vue"] },
                { id: 4, data: "Task3", date: "6/1/2021, 5:34:04 PM", tags: ["Vue", "HTML"] },
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
        showtodos() {
            let result = this.todos;
            return result.slice().reverse();
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
    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter((value) => value.id != id);
        },
        addTodo() {
            let todo = {
                id: Math.random().toString(36).substr(2, 9),
                data: this.input,
                date: new Date().toLocaleString(),
                tags: this.enabledTags,
            };
            if (todo.data != null) {
                this.todos.push(todo);
                this.input = null;
            }
        },
    },
};

// addEventListener('click', ({target}) => {
//   if (target === token) {
//     token.select();
//     document.execCommand('copy');
//     token.parentNode.classList.add('copied');
//     setTimeout(() => token.parentNode.classList.remove('copied'), 1000);
//   }
// })
</script>




<style lang="sass" scoped>
input
	margin-left: 20px
</style>

