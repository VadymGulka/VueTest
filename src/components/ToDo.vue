<template>
    <div>
        <span class="h1">ToDo-List</span>
        <div>
            <input v-model="input" type="text" placeholder="Add Todo...." />
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
		todos: ["todo1", "todo2"] 
        };
    },
};
</script>

<style>
</style>