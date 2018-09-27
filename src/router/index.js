import Vue from "vue";
import Router from "vue-router";
import { routerBefore, routerAfter } from "./guards";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
    },

    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    }
  ]
});

export default router;

router.beforeEach(routerBefore);
router.afterEach(routerAfter);
