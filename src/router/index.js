import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Commercial from "../views/Commercial";
import Command from "../views/Command";
import Product from "../views/Product";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/commercial", component: Commercial },
  { path: "/command", component: Command },
  { path: "/product", component: Product }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
