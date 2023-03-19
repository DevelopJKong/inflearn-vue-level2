<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
        <span class="remove-btn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="js">
export default {
    data: function () {
        return {
            todoItems: []
        }
    },
    created:function () {
        if(localStorage.length > 0 ) {
            for (let i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods:{
        removeTodo: function (item,index) {
            localStorage.removeItem(item);
            this.todoItems.splice(index,1);
        }
    }
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.check-btn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.check-btn-completed {
  color: #b3adad;
}
.text-completed {
  text-decoration: line-through;
  color: #b3adad;
}
.remove-btn {
  margin-left: auto;
  color: #de4343;
}
</style>
