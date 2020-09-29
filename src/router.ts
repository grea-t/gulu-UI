import {createWebHashHistory, createRouter} from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Doc from "./views/Doc.vue";
// @ts-ignore
import SwitchDemo from "./components/SwitchDemo.vue";
// @ts-ignore
import ButtonDemo from "./components/ButtonDemo.vue";
// @ts-ignore
import DialogDemo from "./components/DialogDemo.vue";
// @ts-ignore
import TabsDemo from "./components/TabsDemo.vue";
// @ts-ignore
import DocDemo from "./components/DocDemo.vue";
import { h } from 'vue';
// @ts-ignore
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
  history: history,
  routes: [
    {path: "/", component: Home},
    {
      path: "/doc",
      component: Doc,
      children: [
        {path: "", component: DocDemo},
        { path: "intro", component: md('intro') },
        { path: "get-started", component: md('get-started') },
        { path: "install", component: md('install') },
        {path: "switch", component: SwitchDemo},
        {path: "button", component: ButtonDemo},
        {path: "dialog", component: DialogDemo},
        {path: "tabs", component: TabsDemo},
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});