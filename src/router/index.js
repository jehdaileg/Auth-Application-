import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Loggin from "../views/Loggin.vue";

import firebase from 'firebase';

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
    component: Loggin

  },

  {
    path: "/secret",
    name: "Secret",
    component: ()=> import("../views/Secret.vue"),
    meta : {
      requiresAuth : true 
    }
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

router.beforeEach(function (to, from, next){

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const isAuthenticated = firebase.auth().currentUser;

  if(requiresAuth && !isAuthenticated){
    next('loggin')
  }else {

    next()
  }

});




export default router;
