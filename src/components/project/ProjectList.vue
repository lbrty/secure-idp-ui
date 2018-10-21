<template>
  <div class="project-list">
    <project-item
      v-for="p in projects"
      :project="p"
      :key="p.id"/>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "ProjectList",
  props: {
    projects: Array
  },

  components: {
    ProjectItem
  }
};
</script>
