<template>
  <div class="project-item" :style="bgColor">
    <h2 class="project-item__title">
      <router-link :to="{ name: 'project-detail', params: { projectId: project.id }}">
        {{ project.projectName }}
      </router-link>
    </h2>

    <div class="project-item__description">
      {{ project.description }}
    </div>

    <div class="project-item__controls">
      <span :data-balloon="$t('project.edit')" data-balloon-pos="up" class="project-item__controls__icon">
        <Icon type="md-create" />
      </span>

      <span :data-balloon="$t('project.edit')" data-balloon-pos="up" class="project-item__controls__icon">
        <Icon type="md-trash" />
      </span>

      <span :data-balloon="$t('project.pulse')" data-balloon-pos="up" class="project-item__controls__icon">
        <Icon type="md-pulse" />
      </span>
    </div>

    <div class="project-item__stats">
      {{ $t("project.total") }} {{ project.peopleCount }}
    </div>
  </div>
</template>

<script>
import { colorFromText } from "@/helpers/color";

export default {
  name: "ProjectItem",

  props: {
    project: Object
  },

  computed: {
    bgColor() {
      let toColor = `
        ${this.project.projectName},
        ${this.project.description},
        ${this.project.id},
        ${this.project.peopleCount},
        ${this.project.aidCount}.
      `;

      return `
        background: ${colorFromText(toColor, 200)};
        border: 1px solid ${colorFromText(toColor, 200)}
      `;
    }
  }
};
</script>

<style lang="sass">
@import "./project-item.sass"
</style>
