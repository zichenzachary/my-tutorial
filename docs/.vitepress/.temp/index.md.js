import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Zach的VitePress文档","text":"一个VitePress站点","tagline":"Yesterday Once More","image":{"src":"/background.svg","alt":"VitePress"},"actions":[{"theme":"brand","text":"第一个示例","link":"/markdown-examples"},{"theme":"alt","text":"第二个示例","link":"/api-examples"}]},"features":[{"title":"特性1📝","details":"特性1的详细描述"},{"title":"特性2📝","details":"特性2的详细描述"},{"title":"特性3📝","details":"特性3的详细描述"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
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
