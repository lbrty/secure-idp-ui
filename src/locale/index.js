import Vue from "vue";
import VueI18n from "vue-i18n";

import { locale } from "iview";

import { EN, L_KEY, messages } from "@/locale/config";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: EN,
  fallbackLocale: EN,
  messages
});

locale(messages[EN]);

export const setLocale = (lang = EN) => {
  i18n.locale = lang;
  Vue.config.lang = lang;

  locale(messages[lang]);
  localStorage.setItem(L_KEY, lang);

  // Update HTML with selected language option
  document.querySelector("html").setAttribute("lang", lang);
};

export default i18n;
