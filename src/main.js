import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { iconsSet as icons } from "@coreui/icons";
import { CIcon } from "@coreui/icons-vue";

createApp(App)
  .use(store)
  .use(router)
  .component("c-icon", CIcon)
  .use(icons)
  .mount("#app")
