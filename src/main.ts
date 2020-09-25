import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc from "./views/Doc.vue"

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')