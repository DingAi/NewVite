import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/style.less'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

//关于Element plus 和其icon的内容导入
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('VueDatePicker', VueDatePicker);
app.use(pinia);
app.use(router)
app.config.globalProperties.$routerG = router;
app.mount('#app')
