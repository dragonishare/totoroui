# totoroui

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## 支持 markdown 文件展示

### 添加依赖包

- vue-markdown-loader
- highlight.js

### `vue.config.js` 配置

```
chainWebpack (config) {
    config.resolve.extensions.add('.md');
    config.module
        .rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({raw:true});
}
```

### 编译为库的命令

```
// name: 输出文件名,dest: 输出目录，默认为 dist,entry: 入口文件路径
"lib":"vue-cli-service build --target lib --name totoroui --dest lib packages/index.js"
```

### 配置 `package.json` 文件中发布到 npm 的字段

- `name`: 包名，该名字是唯一的。可在 npm 官网搜索名字，如果存在则需换个名字。
- `version`: 版本号，每次发布至 npm 需要修改版本号，不能和历史版本号相同。
- `description`: 描述。
- `main`: 入口文件，该字段需指向我们最终编译后的包文件。
- `keyword`：关键字，以空格分离希望用户最终搜索的词。
- `author`：作者
- `private`：是否私有，需要修改为 false 才能发布到 npm
- `license`： 开源协议

### 添加 `.npmignore` 文件，设置忽略发布文件

只有编译后的 `lib` 目录、`package.json`、`README.md`才是需要被发布的。所以我们需要设置忽略目录和文件。

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
