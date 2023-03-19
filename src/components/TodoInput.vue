<!-- ! HTML -->
<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodoItem" />
    <span class="add-container">
      <i class="fas fa-plus add-btn" v-on:click="addTodo"></i>
    </span>
  </div>
</template>
<!-- * JAVASCRIPT -->
<script lang="js">
export default {
    data: function() {
        return {
            newTodoItem:""
        }
    },
    methods: {
        addTodo: function () {
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.clearInput();
        },
        clearInput: function () {
            this.newTodoItem = "";
        }
    }
};
</script>
<!-- ? CSS -->
<style>
input:focus {
  outline: none;
}

.input-box {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.input-box input {
  width: 80%;
  border-style: none;
  font-size: 0.9rem;
}

.add-container {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.add-btn {
  color: white;
  vertical-align: middle;
}
</style>
