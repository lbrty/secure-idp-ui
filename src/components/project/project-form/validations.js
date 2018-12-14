import i18n from "@/locale";

export default {
  projectName: [
    {
      required: true,
      message: i18n.t("project.validations.projectName"),
      trigger: "blur"
    },

    {
      message: i18n.t("project.validations.projectNameRequired"),
      trigger: "blur"
    }
  ],

  description: [
    {
      required: true,
      message: i18n.t("project.validations.descriptionRequired"),
      trigger: "blur"
    },

    {
      message: i18n.t("project.validations.descriptionMaxLen"),
      max: 1000,
      trigger: "change"
    }
  ]
};
