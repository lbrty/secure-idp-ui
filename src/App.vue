<template>
  <div id="app">
    <ErrorBoundary>
      <bootstrap>
        <div v-if="isAuthenticated">
          <sidebar/>
          <router-view></router-view>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
      </bootstrap>
    </ErrorBoundary>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",

  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated"
    })
  }
};
</script>


<!-- Keep the order of imports and styles -->
<style>
@import "./assets/css/balloon.css";
@import "./assets/css/animate.css";
@import "../node_modules/iview/dist/styles/iview.css";
</style>

<style lang="sass">
@import "./assets/sass/app"
</style>
