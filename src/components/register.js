import Vue from "vue";
import Bootstrap from "./Bootstrap";
import ErrorBoundary from "./ErrorBoundary";

export default function() {
  Vue.component(Bootstrap.name, Bootstrap);
  Vue.component(ErrorBoundary.name, ErrorBoundary);
}
