<template>
  <div class="sidebar">
    <div class="sidebar__logo">

    </div>

    <div class="sidebar__menu">
      <span
        class="sidebar__menu__item"
        :data-balloon="$t('project.list')"
        data-balloon-pos="right">

        <router-link :to="{name: 'home'}">
          <Icon type="ios-albums-outline" class="sidebar__menu__icon" size="36"/>
        </router-link>

      </span>

      <span
        v-if="isAdmin"
        class="sidebar__menu__item"
        :data-balloon="$t('project.consultants')"
        data-balloon-pos="right">

        <router-link to="/users">
          <Icon type="ios-people-outline" class="sidebar__menu__icon" size="36"/>
        </router-link>

      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sidebar",
  computed: {
    ...mapGetters({
      isAdmin: "auth/isAdmin"
    })
  }
};
</script>

<style lang="sass">
@import "./sidebar.sass"
</style>
