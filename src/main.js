import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.js";
import VueAxios from "vue-axios";
import axios from "axios";

createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app");
