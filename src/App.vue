<template>
  <div id="app">
    <ErrorBoundary>
      <bootstrap>
        <router-view></router-view>
      </bootstrap>
    </ErrorBoundary>
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
