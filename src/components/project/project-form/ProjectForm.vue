<template>
  <div class="project-form">
    <Form v-if="showForm" class="project-form__form" @submit="onSubmit">
      <FormItem class="project-form__form__item">
        <Input
          size="large"
          :placeholder="$t('project.projectName')"
          v-model="newProject.projectName"/>
      </FormItem>

      <FormItem class="project-form__form__item">
        <Input
          type="textarea"
          :rows="6"
          :placeholder="$t('project.shortDescription')"
          v-model="newProject.description"
          class="project-form__form__item__description"/>
      </FormItem>

      <Row>
        <i-col span="12" style="text-align: left; padding-left: 0.5em; padding-top: 0.5em">
          <button type="text" class="project-form__form__cancel" @click.prevent="toggleForm">
            {{ $t("system.cancel") }}
          </button>
        </i-col>

        <i-col span="12" style="text-align: right">
          <Button type="primary" style="width: 100px;" @click.prevent="onSubmit">
            {{ $t("project.create") }}
            </Button>
        </i-col>
      </Row>
    </Form>

    <Button v-else size="large" type="dashed" class="project-form__create" @click.prevent="toggleForm">
      {{ $t("project.create") }} +
    </Button>

    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { createProject } from "@/store/projects/action-types";

const EMPTY_PROJECT = {
  projectName: "",
  description: ""
};

export default {
  name: "ProjectForm",

  props: {
    project: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      loading: false,
      showForm: false,
      newProject: this.project || EMPTY_PROJECT
    };
  },

  methods: {
    onSubmit() {
      this.loading = true;

      this.createProject({
        projectInfo: this.newProject,
        cb: (result, response, err) => {
          this.loading = false;

          if (!err) {
            this.newProject = {};
            this.showForm = false;
            this.$Message.success(this.$t("project.created"));
          } else {
            this.$Message.error(err);
          }
        }
      });
    },

    toggleForm() {
      this.showForm = !this.showForm;
    },

    ...mapActions({
      createProject: `projects/${createProject}`
    })
  }
};
</script>


<style lang="sass">
@import "./project-form.sass"
</style>
