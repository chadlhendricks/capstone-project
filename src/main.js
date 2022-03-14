import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'mdb-ui-kit/css/mdb.min.css';
import '@/assets/style/style.css'

createApp(App).use(router).mount('#app')
