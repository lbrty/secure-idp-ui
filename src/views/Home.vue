<template>
  <div class="home">
    <project-list v-if="projects.length" :projects="projects"/>

    <Alert v-else show-icon>
      {{ $t("project.noProjects") }}
      <Icon type="ios-bulb-outline" slot="icon"></Icon>
      <template slot="desc">{{ $t("project.createProjectInfo") }}</template>
    </Alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectList from "@/components/project/ProjectList.vue";

export default {
  name: "home",

  components: {
    ProjectList
  },

  computed: {
    ...mapGetters({
      projects: "projects/projects"
    })
  }
};
</script>
