import { createApp } from 'vue'

import Vux from '@/index'
import '@/index.scss'

import DemoBlock from './components/demo-block.vue'

import App from './App.vue'

import router from './router'

createApp(App)
  .use(Vux)
  .use(router)
  .component(DemoBlock.name, DemoBlock)
  .mount('#app')
