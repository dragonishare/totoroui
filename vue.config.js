const path = require("path");
const VueMarkDownOptions = require("./website/scripts/vue-markdown-loader.conf");

module.exports = {
  devServer: {
    open: true,
  },
  // 修改 pages 入口
  pages: {
    index: {
      entry: "website/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html", // 输出文件
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 website
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set("@", path.resolve("website"))
      .set("~", path.resolve("packages"));

    // 把 packages 和 website 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });

    // 支持markdown文件解析
    config.resolve.extensions.add(".md");
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options(VueMarkDownOptions);
  },
};
