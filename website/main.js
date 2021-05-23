import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TotoroUI from "../packages/index.js";

Vue.use(TotoroUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
