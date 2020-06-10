<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer
  },
 created() {    
    this.$store.dispatch('setTodos');
    this.$store.dispatch('setUsers');
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    &.router-link-exact-active {
      color: #c44141;
    }
  }
}
button {
  margin: 5px 10px;
  cursor: pointer;
}
.tooltip {
  $color: rgba(#34495e, .9);
  z-index: 10;
  &.info {
    .tooltip-inner {
      background: $color;
      color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
      max-width: 250px;
    }
    .tooltip-arrow {
      border-style: solid;
      position: absolute;
      border-color: $color;
    }
    &[x-placement^="bottom"] {
      .tooltip-arrow {
        border-width: 0 7px 7px 7px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -7px;
      }
    }
  }
  &.success-message {
    color: #41b883;
    font-size: 12px;
  }
  &.invalid-message {
    color: #eb5a46;
    font-size: 20px;
  }
}
</style>
