import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Select2 from "vue3-select2-component"
// import PrimeVue from 'primevue/config';
import './apis/api.js'


// import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
// //core
// import "primevue/resources/primevue.min.css";

// //icons
// import "primeicons/primeicons.css";

// import InputText from `primevue/inputtext`;
// import Button from `primevue/button`;
// import Toast from `primevue/toast`;
// import ToastService from `primevue/toastservice`;

createApp(App)
.use(store)
.use(router)
// .use(PrimeVue)
// .use(ToastService)
// .component(`InputText`, InputText)
// .component(`Button`, Button)
// .component(`Toast`, Toast)
.mount("#app");
