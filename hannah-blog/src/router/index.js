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
    path: "/food",
    name: "Food",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Food" }
  },
  {
    path: "/gardening",
    name: "Gardening",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Gardening" }
  },
  {
    path: "/crafts",
    name: "Crafts",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Crafts" }
  },
  {
    path: "/coding",
    name: "Coding",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Coding" }
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Books" }
  },
  {
    path: "/languages",
    name: "Languages",
    component: () =>
      import("@/views/Browse.vue"),
    props: { category: "Languages" }
  }
];

const router = new VueRouter({
  routes,
});

export default router;
