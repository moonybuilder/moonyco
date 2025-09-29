<template>
  <div id="app">
    <!-- Put any global nav/footer here if you want them on every page -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* global app-level styles can go here (not scoped) */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* keep the body background and fonts in page components or put global styles in main.css */
</style>