<template>
  <div class="project-form">
    <Form
      v-if="showForm"
      class="project-form__form"
      ref="validateProject"
      :rules="ruleValidate"
      @submit="onSubmit"
    >
      <FormItem class="project-form__form__item" prop="projectName" :error="errors.projectName">
        <Input
          size="large"
          :placeholder="$t('project.projectName')"
          v-model="newProject.projectName"
        />
      </FormItem>

      <FormItem class="project-form__form__item" prop="description" :error="errors.description">
        <Input
          type="textarea"
          :rows="4"
          :placeholder="$t('project.shortDescription')"
          v-model="newProject.description"
          class="project-form__form__item__description"
        />
      </FormItem>

      <Row class="project-form__form__controls">
        <i-col span="12" style="text-align: left; padding-left: 0.5em; padding-top: 0.5em">
          <button
            type="text"
            class="project-form__form__cancel"
            @click.prevent="toggleForm"
          >{{ $t("system.cancel") }}</button>
        </i-col>

        <i-col span="12" style="text-align: right">
          <Button
            type="primary"
            style="width: 100px;"
            @click.prevent="onSubmit"
          >{{ $t("project.create") }}</Button>
        </i-col>
      </Row>
    </Form>

    <Button
      v-else
      size="large"
      type="dashed"
      class="project-form__create"
      @click.prevent="toggleForm"
    >{{ $t("project.create") }} +</Button>

    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { createProject } from "@/store/projects/action-types";
import transformErrors from "@/helpers/formErrors";
import validationRules from "./validations";

const EMPTY_PROJECT = {
  projectName: "",
  description: ""
};

const mayBeGetErrors = (response, err, hasPrimitiveError) => {
  const errors = err || response.createProject.errors;

  if (Object.keys(errors).length > 0) {
    return transformErrors(errors);
  }

  if (hasPrimitiveError) {
    hasPrimitiveError(errors);
  }

  return {};
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
      errors: {},
      newProject: this.project || EMPTY_PROJECT,
      ruleValidate: validationRules
    };
  },

  methods: {
    onSubmit(name) {
      this.$refs.validateProject.validate(valid => {
        if (!valid) return;

        this.loading = true;
        this.createProject({
          projectInfo: this.newProject,
          cb: (result, response, err) => {
            this.loading = false;
            const errors = err || result.createProject.errors;

            if (!errors || !errors.length) {
              this.showSuccess();
            } else {
              this.errors = mayBeGetErrors(result, err, error => this.$Message.error({ content: error }));
            }
          }
        });
      });
    },

    showSuccess() {
      this.newProject = {};
      this.showForm = false;
      this.$Message.success(this.$t("project.created"));
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
