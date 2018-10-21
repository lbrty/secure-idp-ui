<template>
  <div class="home">
    <project-list/>
  </div>
</template>

<script>
import ProjectList from "@/components/project/ProjectList.vue";

export default {
  name: "home",
  components: {
    ProjectList
  }
};
</script>
