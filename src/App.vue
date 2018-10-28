<template>
  <div id="app" class="app">
    <ErrorBoundary>
      <bootstrap>
        <div v-if="isAuthenticated">
          <sidebar/>
          <main class="app__content">
            <router-view></router-view>
          </main>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
      </bootstrap>
    </ErrorBoundary>
  </div>
</template>

<script>
import { APP_TITLE } from "@/config";
import { mapGetters } from "vuex";

export default {
  name: "app",

  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated"
    })
  },

  created() {
    document.title = APP_TITLE;
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
