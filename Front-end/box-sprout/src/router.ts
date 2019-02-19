import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const Login = () => import(/* webpackChunkName: "log in" */ './views/Login.vue')
const SignUp = () => import(/* webpackChunkName: "sign up" */ './views/SignUp.vue')
const NotFound = () => import(/* webpackChunkName: "not found" */ './views/NotFound.vue')

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')
const Login = () => import(/* webpackChunkName: "log in" */ './views/Login.vue')
const SignUp = () => import(/* webpackChunkName: "sign up" */ './views/SignUp.vue')
const NotFound = () => import(/* webpackChunkName: "not found" */ './views/NotFound.vue')

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/log-in",
      name: "login",
      component: Login
    },
    {
      path: "/sign-up",
      name: "sign up",
      component: SignUp
    },
    {
      path:"/404",
      name:"not found",
      component: NotFound
    },
    {
      path:"*",
      redirect:"/404"
    }
  ]
});
