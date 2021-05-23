// 导入组件，组件必须声明 name
import Alert from "./src/main.vue";

// 为组件提供 install 方法，供组件对外按需引入
Alert.install = (Vue) => {
  Vue.component(Alert.name, Alert);
};

// 默认导出组件
export default Alert;
