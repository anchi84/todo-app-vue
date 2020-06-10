<template>
  <div v-if="user" class="user-details-page"> 
    <h2>This is {{ user.name }}'s details page</h2>
    <div class="user-details">
      <h3>About me</h3>
      <p><span class="label">Username: </span>{{ user.username }}</p>
      <p><span class="label">E-mail: </span>{{ user.email }}</p>
      <p><span class="label">Phone: </span>{{ user.phone }}</p>
      <p><span class="label">Address: </span>{{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}</p>
      <p><span class="label">Website: </span>{{ user.website }}</p>
      <p><span class="label">Company: </span>{{ user.company.name }}</p>
    </div>
    <div v-if="logedInUser === 'admin'" class="new-task">
      <span class="label">Title: </span>
      <input 
        type="text" 
        v-model="taskTitle" 
        class="task-title"
        v-tooltip="{
          content: 'Task successfully added!',
          placement: 'top',
          classes: ['success-message'],
          trigger: 'manual',
          show: openTooltip,
          offset: -25
        }"
      />
      <button @click="addNewTask">Add new task</button>
    </div>
    <button @click="$router.push('/')">Go to Homepage</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
      userId: this.$route.params.id,
      taskTitle: '',
      openTooltip: false
    }
  },
  methods: {
    addNewTask() {
      let todo = {
        completed: false,
        id: this.todos.length + 1,
        title: this.taskTitle,
        userId: this.userId
      }
      this.$store.dispatch('addNewTask', todo);
      this.taskTitle = '';
      this.openTooltip = true;
      setTimeout(() =>  this.openTooltip = false, 3000)
    }
  },
  computed: {
    user() {
      return this.users[this.userId - 1];
    },
    ...mapState(['users', 'todos', 'logedInUser'])
  }
};
</script>

<style lang="scss" scoped>
.user-details-page {
  color: royalblue;
  margin: 50px 0;
  .user-details, .new-task {
    width: 60%;
    margin: 30px auto;
    .label {
      color: #34495e;
      font-weight: bold;
    }
    .task-title {
      color: royalblue;
      height: 30px;
      width: 200px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin: 25px 0;
    }
  }
  button {
    background-color: cornflowerblue;
    color: white;
    margin: 10px 20px;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
  }
}
</style>
