<template>
    <div>
        <span class="h1">ToDo-List</span>
        <div>
            <input v-model="input" type="text" placeholder="Add Todo...." />
            <button @click="addTodo">Add todo</button>
        </div>
        <div class="col-3">
            <ul v-for="(todo, index) in todos" :key="todo.id">
                <li>
                    {{ index + 1 + " - " + todo.name
                    }}<button
                        class="btn btn-danger float-end"
                        :todo="todo"
                        @click="removeTodo(todo)"
                    >
                        Delete todo
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
let cantidadTodos = 0;

const createTodo = function (input) {
    cantidadTodos++;
    return { id: cantidadTodos, name: input };
};

export default {
    data() {
        return {
            input: "",
            todos: [createTodo("todo1"), createTodo("todo2")],
        };
    },
    methods: {
        addTodo() {
            if (this.input.length > 0) {
                this.todos.push(createTodo(this.input));
            }
            this.input = "";
        },
        removeTodo(item) {
            this.todos = this.todos.filter((todo) => todo !== item);
        },
    },
};
</script>

<style>
#lista {
    padding-right: 100px;
    color: rebeccapurple;
}
</style>



