import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(VueGoodTablePlugin)

app.mount('#app')
