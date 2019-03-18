import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from "vue-meta";

const About = () =>
  import(/* webpackChunkName: "products" */ "./views/About.vue");
const Products = () =>
  import(/* webpackChunkName: "products" */ "./views/Products.vue");
const Order = () =>
  import(/* webpackChunkName: "products" */ "./views/Order.vue");
const ConfirmOrder = () =>
  import(/* webpackChunkName: "products" */ "./views/OrderConfirm.vue");
const Login = () =>
  import(/* webpackChunkName: "log in" */ "./views/Login.vue");
const SignUp = () =>
  import(/* webpackChunkName: "log in" */ "./views/SignUp.vue");
const NotFound = () =>
  import(/* webpackChunkName: "log in" */ "./views/NotFound.vue");

Vue.use(Router);
Vue.use(Meta);

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
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/confirm-order",
      name: "confirm order",
      component: ConfirmOrder
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
      path: "/404",
      name: "not found",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
