import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardVue from "../views/home/Dashboard.vue"
import UserIndex from "../views/user/UserIndex.vue"
import UserList from "../views/user/UserList.vue"
import GridUser from "../views/user/GridUser.vue"

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(`../components/Login.vue`),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/trang-chu",
    name: "trang-chu",
    component: DashboardVue,
  },
  {
    path: "/user",
    name: "user",
    component: UserIndex
    ,
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
    path: "/user-grid",
    name: "user-grid",
    component: GridUser,
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
