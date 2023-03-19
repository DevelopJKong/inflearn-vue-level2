<template>
  <div>hello</div>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
};
</script>

<style></style>
