import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import deskree from "@deskree/deskree-js";

import "./styles/index.css";

const app = createApp(App);

app.config.globalProperties.$deskree = deskree;

app.use(createPinia());
app.use(router);

app.mount("#app");
