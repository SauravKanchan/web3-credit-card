import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { store } from "./store";
import Toast from "vue-toastification";

createApp(App).use(store).use(Toast).mount("#app");
