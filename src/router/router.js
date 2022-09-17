import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/drag",
    name: "drag",
    component: () => import("@/pages/DragAndDrop.vue"),
  },
  {
    path: "/api",
    name: "api",
    component: () => import("@/pages/Api.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
