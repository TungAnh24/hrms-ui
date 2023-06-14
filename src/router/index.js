import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardVue from "../views/home/Dashboard.vue"
import UserIndex from "../views/user/UserIndex.vue"
import UserList from "../views/user/UserList.vue"
import GridUser from "../views/user/GridUser.vue"
import UserProfile from "../views/user/UserProfile.vue"
import AssignmentIndex from "../views/assignment/AssignmentIndex.vue"
import AssignmentEdit from "../views/assignment/AssignmentEdit.vue"
import DepartmentIndex from "../views/department/DepartmentIndex.vue"
import LeaveIndex from "../views/leave/LeaveIndex.vue"
import LeaveRegister from "../views/leave/LeaveRegister.vue"
import ContractIndex from "../views/contract/ContractIndex.vue"
import Profile from "../views/profile/Profile.vue"
const routes = [
  {
    path: "/dang-nhap",
    name: "login",
    component: () => import(`../components/Login.vue`),
    meta: {requiresAuth: false}
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
      path: "/",
      name: "login",
      component: () => import(`../components/Login.vue`),
    },
  {
    path: "/trang-chu",
    name: "trang-chu",
    component: DashboardVue,
  },
  {
    path: "/nhan-vien",
    name: "user",
    component: UserIndex
    ,
    children: [
      {
        path: "danh-sach",
        name: "list",
        component: UserList,
      }
    ],
  },
  {
    path: "/nhan-vien-danh-sach",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/user-grid",
    name: "user-grid",
    component: GridUser,
  },
  {
    path: "/nhan-vien-thong-tin-ca-nhan",
    name: "user-profile",
    component: UserProfile,
  },
  {
    path: "/cong-viec",
    name: "assignment",
    component: AssignmentIndex,
  },
  {
    path: "/assignment/edit/:id",
    name: "assignmentEdit",
    component: AssignmentEdit,
  },
  {
    path: "/van-phong",
    name: "department",
    component: DepartmentIndex,
  },
  {
    path: "/nghi-phep",
    name: "leaveIndex",
    component: LeaveIndex
  },
  {
    path: "/dang-ky-nghi-phep",
    name: "leaveRegister",
    component: LeaveRegister
  },
  {
    path: "/test",
    name: "ContractIndex",
    component: ContractIndex
  },
  {
    path: "/ho-so",
    name: "Profile",
    component: Profile
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})