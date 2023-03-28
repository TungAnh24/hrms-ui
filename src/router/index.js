import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardVue from "../views/home/Dashboard.vue"
import UserIndex from "../views/user/UserIndex.vue"
import UserList from "../views/user/UserList.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/index",
    name: "index",
    component: DashboardVue,
  },
  {
    path: "/user",
    name: "user",
    component: UserIndex,
    children: [
      {
        path: "list",
        name: "list",
        component: UserList,
      }
    ],
  },
  {
    path: "/user-list",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
