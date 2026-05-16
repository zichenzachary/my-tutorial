import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"VitePress","text":"Zach的VitePress文档从一到无穷大","tagline":"Yesterday Once More","actions":[{"theme":"brand","text":"开始","link":"/文章/示例/样式预览/样式预览"},{"theme":"alt","text":"文章","link":"/简明LaTex教程/简明LaTex教程"}]},"features":[{"icon":"✏️","title":"专注内容","details":"只需 Markdown 即可轻松创建美观的文档站点"},{"icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"30\\" viewBox=\\"0 0 256 220.8\\"><path fill=\\"#41B883\\" d=\\"M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z\\"/><path fill=\\"#41B883\\" d=\\"m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z\\"/><path fill=\\"#35495E\\" d=\\"M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z\\"/></svg>","title":"使用 Vue 自定义","details":"直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题"},{"icon":"🚀","title":"速度真的很快","details":"采用静态 HTML 实现快速的页面初次加载，使用客户端路由实现快速的页面切换导航"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1776831579000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
