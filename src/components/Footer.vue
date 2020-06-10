<template>
  <div class="footer">
    <p>&copy;Anchi  {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: cornflowerblue;
  color: white;
  font-weight: 900;
  z-index: 1;
}
</style>