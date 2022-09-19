import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/drag-tank",
    name: "drag-tank",
    component: () => import("@/pages/DragTankPage.vue"),
  },
  {
    path: "/drag-car",
    name: "drag-car",
    component: () => import("@/pages/DragCarPage.vue"),
  },
  {
    path: "/api",
    name: "api",
    component: () => import("@/pages/Api.vue"),
  },
  {
    path: "/bitcoin",
    name: "bitcoin",
    component: () => import("@/pages/Bitcoin.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
