<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!-- Keep the order of imports and styles -->
<style>
@import "./assets/css/balloon.css";
@import "./assets/css/animate.css";
@import "../node_modules/iview/dist/styles/iview.css";
</style>

<style lang="sass">
@import "./assets/sass/app"
</style>
