import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 加载全局样式
import './styles/index.less'

createApp(App).use(store).use(router).use(router).use(store).mount('#app')
