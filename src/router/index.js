import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/books/add",
    name: "addBook",
    component: () => import("../views/AddBook.vue")
  },
  {
    path: "/books/:id",
    name: "book",
    component: () => import("../views/Book.vue")
  },
  {
    path: "/books/:id/edit",
    name: "book",
    component: () => import("../views/EditBook.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
