<template>
  <div class="notfound">
    <img src="@/assets/logo.png" alt="logo">
    <h1>404 Not found page</h1>
    <button @click="goToHompage">Go to Homepage</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHompage() {
      if(this.$store.state.isAuthenticated) {
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #34495e;
  button {
    background-color: #41b883;
    color: #34495e;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    &:active {
      box-shadow: inset 0 0 7px #34495e;
      outline: none;
    }
  }
  img {
    width: 150px;
  }
}
.notfound ~ .footer {
  color: #34495e;
  background-color: #41b883;
}
</style>
