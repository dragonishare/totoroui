// 为组件提供 install 方法，供组件对外按需引入
import Alert from "./src/main.vue";
Alert.install = (Vue) => {
  Vue.component(Alert.name, Alert);
};
export default Alert;
