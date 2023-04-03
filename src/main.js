import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Select2 from "vue3-select2-component"
import './apis/api.js'

createApp(App).use(store).use(router).mount("#app");
