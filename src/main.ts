import { createApp, watch } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import deskree from "@deskree/deskree-js";

import "./styles/index.css";

const app = createApp(App);

const pinia = createPinia();

if (localStorage.getItem("state")) {
  pinia.state.value = JSON.parse(localStorage.getItem("state") || "{}");
}

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  { deep: true }
);

app.config.globalProperties.$deskree = deskree;

app.use(createPinia());
app.use(router);

app.mount("#app");
