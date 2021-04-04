import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("@/views/About.vue"),
  },
  {
    path: "/:category",
    name: "Browse",
    component: () => import("@/views/Browse.vue"),
    props: true
  },
  {
    path: "articles/:articleId",
    name: "Article",
    component: () =>
      import("@/views/Article.vue"),
    props: true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
