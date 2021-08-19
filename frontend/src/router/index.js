import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
// const ArticleDetail = () => import("../views/ArticleDetail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/articles/:id",
  //   name: "article-detail",
  //   component: ArticleDetail,
  // },
  {
    path: "/works",
    name: "Works",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Works.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
