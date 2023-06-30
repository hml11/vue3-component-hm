import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import LanUI from './components'


const app = createApp(App)
app.use(LanUI)
app.use(ElementPlus)
app.mount('#app')
