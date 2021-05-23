import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 导入组件库
import TotoroUI from "../packages/index.js";
// 注册组件库
Vue.use(TotoroUI);

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
import "./assets/github-markdown.css";

// 引入demo-block
import DemoBlock from "./components/demoBlock";
Vue.component("demo-block", DemoBlock);

// 各demo的样式
import "./assets/demo-styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
