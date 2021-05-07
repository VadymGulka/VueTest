<template>
    <div>
        <span class="h1">ToDo-List</span>
        <div>
            <form @submit.prevent="addTodo">
                <input v-model="input" type="text" placeholder="Add Todo...." />
                <button type="submit">Add todo</button>
            </form>
        </div>
        <ul v-for="todo in todos" :key="todo.id">
            <li>{{ todo }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: null,
            todos: ["todo1", "todo2"],
        };
    },
    methods: {
          addTodo(){
                this.todos.push(this.input)
          }
    }
};
</script>

<style>
</style>