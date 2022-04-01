import { createApp } from "vue";
import App from "./App.vue";
import router from './router'

/* import the bootstrap libraries */
import "bootstrap/dist/css/bootstrap.min.css";

/* import the fontawesome libraries
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFree } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
/*NOTE: Font awesome not compatible con Vue 3, reference: https://fontawesome.com/docs/web/use-with/vue/troubleshoot*/

createApp(App).use(router).mount("#app");
