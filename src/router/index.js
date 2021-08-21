import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/register",
    name: "Register",
    component : () => import ("../views/Register.vue")


  },

  {
    path: "/loggin",
    name: "Loggin",
    component: ()=> import("../views/Loggin.vue")

  },

  {
    path: "/secret",
    name: "Secret",
    component: ()=> import("../views/Secret.vue")

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
