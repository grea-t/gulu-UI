import "./lib/gulu.scss";
import "./index.scss";
import {createApp} from "vue";
// @ts-ignore
import App from "./App.vue";
// @ts-ignore
import {router} from './router';
import 'github-markdown-css'
// @ts-ignore
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown)
