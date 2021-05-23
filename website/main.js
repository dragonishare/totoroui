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
//引入代码高亮
import "highlight.js/styles/color-brewer.css";

// 引入demo-block
import DemoBlock from "./components/demoBlock";
Vue.component("demo-block", DemoBlock);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
