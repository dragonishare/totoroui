const striptags = require("./strip-tags");
const md = require("markdown-it")();
const slugify = require("transliteration").slugify;
const hljs = require("highlight.js");
module.exports = {
  raw: true,
  html: true,
  linkify: true,
  typographer: true,
  langPrefix: "language-",
  preventExtract: true,
  wrapper: 'div class="markdown-body"',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
  use: [
    [
      require("markdown-it-anchor"),
      {
        level: 2,
        slugify: slugify,
        permalink: true,
        permalinkBefore: true,
      },
    ],
    [
      require("markdown-it-container"),
      "demo",
      {
        validate: function (params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },

        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // 1.获取第一行的内容使用markdown渲染html作为组件的描述
            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            var description = m && m.length > 1 ? m[1] : "";
            var descriptionHTML = description ? md.render(description) : "";

            // 2.获取代码块内的html和js代码
            var content = tokens[idx + 1].content;
            var html = convert(
              striptags.strip(content, ["script", "style"])
            ).replace(/(<[^>]*)=""(?=.*>)/g, "$1");
            var script = striptags.fetch(content, "script");
            var style = striptags.fetch(content, "style");
            var jsfiddle = { html: html, script: script, style: style };
            jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

            // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
            return `<demo-block :jsfiddle="${jsfiddle}">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
          }
          return "</div></demo-block>\n";
        },
      },
    ],
    [require("markdown-it-container"), "tip"],
    [require("markdown-it-container"), "warning"],
  ],
};

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"),
        16
      )
    );
  });
  return str;
}
