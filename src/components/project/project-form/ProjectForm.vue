<template>
  <div class="project-form">
    <Form v-if="showForm" class="project-form__form">
      <FormItem class="project-form__form__item">
        <Input size="large" placeholder="Project name"/>
      </FormItem>

      <FormItem class="project-form__form__item">
        <Input type="textarea" :rows="6" placeholder="Short description" class="project-form__form__item__description"/>
      </FormItem>

      <Row>
        <i-col span="12" style="text-align: left; padding-left: 0.5em; padding-top: 0.5em">
          <button type="text" class="project-form__form__cancel" @click.prevent="toggleForm">Cancel</button>
        </i-col>

        <i-col span="12" style="text-align: right">
          <Button type="primary" style="width: 100px;">{{ $t("project.create") }}</Button>
        </i-col>
      </Row>
    </Form>

    <Button v-else size="large" type="dashed" class="project-form__create" @click.prevent="toggleForm">
      {{ $t("project.create") }} +
    </Button>
  </div>
</template>

<script>
export default {
  name: "ProjectForm",

  props: {
    project: {
      type: Object,
      default: () => {},
      required: false
    }
  },

  data() {
    return {
      showForm: false
    };
  },

  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    }
  }
};
</script>


<style lang="sass">
@import "./project-form.sass"
</style>
