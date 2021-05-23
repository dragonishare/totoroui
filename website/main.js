import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 导入组件库
import TotoroUI from "../packages/index.js";
// 注册组件库
Vue.use(TotoroUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
