import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import WhiteLabel from "../pages/white-label.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/wl", component: WhiteLabel },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
