<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
<style>
body{
  background-image: url('@/assets/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: #1d3c62;
  background-blend-mode: difference;
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>