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
import {h} from 'vue';
// @ts-ignore
import Markdown from './components/Markdown.vue';
// @ts-ignore
import intro from './markdown/intro.md'
// @ts-ignore
import getStarted from './markdown/get-started.md'
// @ts-ignore
import install from './markdown/install.md'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    {path: "/", component: Home},
    {
      path: "/doc",
      component: Doc,
      children: [
        {path: "", redirect: '/doc/intro'},
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        {path: "switch", component: SwitchDemo},
        {path: "button", component: ButtonDemo},
        {path: "dialog", component: DialogDemo},
        {path: "tabs", component: TabsDemo},
      ],
    },
  ],
});
router.afterEach(() => {
});