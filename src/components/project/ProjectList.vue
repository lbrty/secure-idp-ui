<template>
  <div class="project-list">
    <project-form/>

    <project-item
      v-for="p in projects"
      :project="p"
      :key="p.id"/>
  </div>
</template>

<script>
import ProjectItem from "./project-item/ProjectItem.vue";
import ProjectForm from "./project-form/ProjectForm.vue";

export default {
  name: "ProjectList",
  props: {
    projects: Array
  },

  components: {
    ProjectItem,
    ProjectForm
  }
};
</script>
