import Vue from "vue";
import Bootstrap from "./Bootstrap.vue";
import ErrorBoundary from "./ErrorBoundary";
import Sidebar from "./sidebar/Sidebar.vue";

export default function() {
  Vue.component(Bootstrap.name, Bootstrap);
  Vue.component(ErrorBoundary.name, ErrorBoundary);
  Vue.component(Sidebar.name, Sidebar);
}
