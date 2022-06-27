<template>
  <input type="text" v-model="newToDoItem" />
  <button v-on:click="addToDo">add</button>
</template>

<script>
export default {
  data: function () {
    return {
      newToDoItem: "",
    };
  },

  methods: {
    addToDo:function () {
      console.log(this.newToDoItem);
      localStorage.setItem(this.newToDoItem,this.newToDoItem);
      this.newToDoItem = '';
    }
  }
};
</script>

<style></style>
