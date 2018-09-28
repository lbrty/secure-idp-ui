<template>
  <Spin v-if="loading" fix>
    <Icon type="ios-loading" size="26" class="spin-icon"></Icon>
    <div class="loading-text">Loading…</div>
  </Spin>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
import { getToken } from "@/router/util";

export default {
  data() {
    return {
      loading: true
    };
  },

  methods: {
    bootstrap() {
      if (getToken()) {
        // TODO
      }
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler: "bootstrap"
    }
  }
};
</script>

<style lang="sass" scoped>
.spin-icon
  animation: spin 1s linear infinite

.loading-text
  font-size: 1.52em
  font-weight: 400
  margin-left: 1em

@keyframes spin
  from
    transform: rotate(0deg)
  50%
    transform: rotate(180deg)
  to
    transform: rotate(360deg)
</style>
