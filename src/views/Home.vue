<template>
  <div class="home">
    <Header />
    <UsersAndTodos />
  </div>
</template>

<script>
import UsersAndTodos from '@/components/UsersAndTodos.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    UsersAndTodos,
    Header
  },
};
</script>

<style scoped>
.logo {
  width: 20%;
  margin: 10px;
}
</style>
