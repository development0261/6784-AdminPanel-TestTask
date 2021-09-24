import Vue from "vue";
import VueRouter from "vue-router";
import ProductDetails from "../views/Home.vue";
// import ProductDetails from "../views/ProductDetails/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Product Details",
    component: ProductDetails,
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
