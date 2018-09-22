import i18n from "@/locale";

export default {
  email: [
    {
      required: true,
      message: i18n.t("login.emailRequired"),
      trigger: "blur"
    },

    {
      type: "email",
      message: i18n.t("login.enterValidEmail"),
      trigger: "blur"
    }
  ],

  password: [
    {
      required: true,
      message: i18n.t("login.passwordRequired"),
      trigger: "blur"
    },

    {
      message: i18n.t("login.enterPassword"),
      trigger: "blur"
    }
  ]
};
