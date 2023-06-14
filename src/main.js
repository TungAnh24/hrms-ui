import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './apis/api.js'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

//theme
import 'primevue/resources/themes/lara-light-indigo/theme.css';
    
//core
import 'primevue/resources/primevue.min.css';

createApp(App)
.use(store)
.use(router)
.use(VueToast)
.use(PrimeVue)
.use(ToastService)
.component('Toast', Toast)
.mount("#app");
