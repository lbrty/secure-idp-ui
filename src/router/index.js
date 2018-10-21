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
      path: "/p/:projectId",
      name: "project-detail",
      component: () => import(/* webpackChunkName: "project-detail" */ "@/views/ProjectDetail.vue"),
      props: true
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
