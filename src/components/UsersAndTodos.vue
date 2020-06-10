<template>
  <div v-if="users && todos" class="main">
    <h1 class="title">Welcome {{logedInUser}} to todo list!</h1>
    <div v-for="(user, index) in users" :key="user.id">
      <h3 class="user" :class="logedInUser" @click.prevent="toggleShowTodos(index)">{{ user.name }}</h3>
      <p class="uncompleted">uncompleted tasks: {{ uncomletedTodosOfUser(user.id) }} </p>
      <ol v-if="logedInUser === 'admin'" v-show="showTodos[index]">
        <li class="todo" v-for="todo in todosOfUser(user.id)" :key="todo.id" @click.prevent="toggleCompletedTodo(todo)" :class="todo.completed ? 'completed': 'uncompleted'">
          {{ todo.title }} 
          <span class="checkmark" v-if="todo.completed" v-html="'&#10004;'"></span>
        </li>
      </ol>
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UsersAndTodos',
  data() {
    return {
      showTodos: []
    }
  },
  methods: {
    toggleShowTodos(index) {
      this.$set(this.showTodos, index, !this.showTodos[index]);
    },
    toggleCompletedTodo(todo) {
      todo.completed = !todo.completed;
    }
  },
  watch: {
    showTodos() {
      this.$nextTick();
    }
  },
  computed: {
    todosOfUser() {
      return userId => this.todos.filter(todo => userId === todo.userId)
    },
    uncomletedTodosOfUser() {
      return userId => this.todos.filter(todo => userId === todo.userId && todo.completed === false).length
    },
    ...mapState(['users', 'todos', 'logedInUser'])
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 130px;
  margin-bottom: 80px;
  color: royalblue;
  .title {
    font-size: 1.75rem;
  }
  .user {
    margin: 30px 0 0;
    background-color: whitesmoke;
    &.admin {
      cursor: pointer;
    }
  }
  .todo {
    margin: 0 10px;
    text-align: left;
    cursor: pointer;
    .checkmark {
      font-size: 12px;
      color: mediumspringgreen;
    }
  }
  .completed {
    color: royalblue;
  }
  .uncompleted {
    color: crimson;
  }
  @media screen and (max-width: 767px) {
    margin-top: 150px;
  }
}
</style>