import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from "@/views/AppMain";
import AppHouse from "@/views/AppHouse";
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/house",
    name: "house",
    component: AppHouse,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
