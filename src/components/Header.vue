<template>
  <div class="header">
    <span v-for="user in $store.state.users" :key="user.id">
      <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">
        <img class="gravatar" 
          :alt="user.email"
          :src="calculateGravatarImage(user.email)"
          v-tooltip="{
            content: user.username,
            placement: 'bottom-center',
            classes: ['info'],
            trigger: 'hover',
            offset: 30,
            delay: {
              show: 400,
              hide: 300,
            },
          }"
        />
      </router-link>
    </span>
    <button type="button" @click="logout">Log Out</button>
  </div>
</template>

<script>
import md5 from "md5";

export default {
  name: 'Header',
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => this.$router.push('/login'))
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    calculateGravatarImage() {
      return userEmail => 'http://www.gravatar.com/avatar/' +
          md5(userEmail) +
          '?' +
          'd=monsterid' +
          '&' +
          's=50'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0;
  background-color: cornflowerblue;
  color: white;
  z-index: 1;
  button {
    display: block;
    width: 100px;
    background-color: whitesmoke;
    color: cornflowerblue;
    font-weight: 900; 
    padding: 10px;
    margin: auto;
    border: none;
    border-radius: 5px;
    &:active {
      box-shadow: inset 0 0 7px #34495e;
      outline: none;
    }
    &:focus {
      outline: none;
    }
  }
}
.gravatar {
  padding: 5px 10px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 5px;
    width: 30px;
  }
}
</style>