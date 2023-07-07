import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import LanUI from './components'
import { createPinia } from 'pinia'
import router from './router'
import 'virtual:svg-icons-register'


const app = createApp(App)
app.use(LanUI).use(ElementPlus).use(createPinia()).use(router)
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});
app.directive('enterNumber', {
  mounted(el, { value = 100 }, vnode) {
    el = el.nodeName == "INPUT" ? el : el.children[0]
    var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
    el.addEventListener('input', function () {
      el.value = el.value.match(new RegExp(RegStr, 'g'));
      el.dispatchEvent(new Event('input'))
    });
  }
});
app.mount('#app')
