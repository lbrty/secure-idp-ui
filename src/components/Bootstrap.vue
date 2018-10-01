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
.bootstrap
  background: #4e5158

  &__spin-icon
    color: #fff
    animation: spin 1s linear infinite

.loading-text
  color: #fff
  font-size: 1.22em
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
