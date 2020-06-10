<template>
  <div
    class="login"
    v-tooltip="{
      content: 'Wrong email or password! Try again!',
      placement: 'bottom',
      classes: ['invalid-message'],
      trigger: 'manual',
      show: openTooltip,
      offset: 20
    }"
  >

    <h2 class="form-title">Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required @focus="closeTooltip"/>
      <input type="password" v-model="password" placeholder="Password" required @focus="closeTooltip"/>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      openTooltip: false
    }
  },
  methods: {
    login() {
      let { email, password } = this;
      this.$store.dispatch('auth_request', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => {
          console.log(err)
          this.openTooltip = true;
        })
      email = '';
      password = '';
    },
    closeTooltip() {
      if(this.openTooltip) {
        this.openTooltip = false;
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  border: 2px solid #34495e;
  border-radius: 7px;
  margin: 80px auto 0;
  width: 300px;
  .form-title {
    background-color: #41b883;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 2px solid #34495e;
    padding: 20px;
    margin: 0;
  }
  input[type="password"],
  input[type="email"] {
    border: 1px solid #a6abaf;
    border-radius: 4px;
    height: 40px;
    margin: 30px 0 0;
    padding-left: 35px;
    width: 80%;
    &:focus {
      box-shadow: 0 0 5px 2px #34495e;
      outline: 0;
    }
  }

  button[type="submit"] {
    width: 200px;
    font-weight: 900;
    color: #34495e;
    text-transform: uppercase;
    padding: 10px;
    margin: 30px 0;
    border: none;
    background-color: #41b883;
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

.login ~ .footer {
  color: #34495e;
  background-color: #41b883;
}
</style>