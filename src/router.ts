import { createWebHashHistory, createRouter } from "vue-router";
// @ts-ignore
import Home from "./views/Home.vue";
// @ts-ignore
import Doc from "./views/Doc.vue";
// @ts-ignore
import SwitchDemo from "./components/SwitchDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [{ path: "switch", component: SwitchDemo }],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});