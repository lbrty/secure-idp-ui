<template>
  <div class="project-item">
    <h2 class="project-item__title">{{ project.projectName }}</h2>
    <div class="project-item__controls"></div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: Object
  }
};
</script>
