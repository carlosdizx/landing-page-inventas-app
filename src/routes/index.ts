import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: import("../components/Navbar.vue"),
    name: "",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
