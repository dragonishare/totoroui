import Alert from "./alert";

// 所有组件列表
const components = [Alert];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return;
  install.installed = true;
  // 遍历注册所有组件
  components.map((component) => Vue.component(component.name, component));
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
};

// 判断是否是直接引入文件。检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components,
};
