<template>
  <Spin v-if="loading" fix class="bootstrap">
    <Icon type="ios-loading" size="26" class="bootstrap__spin-icon"></Icon>
    <div class="loading-text">Loading…</div>
  </Spin>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
import { getToken } from "@/router/util";
import { mapActions } from "vuex";

export default {
  name: "bootstrap",

  data() {
    return {
      loading: false
    };
  },

  methods: {
    bootstrap() {
      if (this.loading) return;

      this.loading = true;
      if (getToken()) {
        this.init(err => {
          this.loading = false;
          if (err && err.message) {
            this.$Message.error(err.message);
          }
        });
      } else {
        this.loading = false;
      }
    },

    ...mapActions("init", ["init"])
  },

  watch: {
    $route: {
      immediate: true,
      handler: "bootstrap"
    }
  }
};
</script>

<style lang="sass">
@import "./bootstrap.sass"
</style>
