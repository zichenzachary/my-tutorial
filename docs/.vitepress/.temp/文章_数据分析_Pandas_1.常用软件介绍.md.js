import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1.常用软件介绍","description":"","frontmatter":{},"headers":[],"relativePath":"文章/数据分析/Pandas/1.常用软件介绍.md","filePath":"文章/数据分析/Pandas/1.常用软件介绍.md","lastUpdated":1776831579000}');
const _sfc_main = { name: "文章/数据分析/Pandas/1.常用软件介绍.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-常用软件介绍" tabindex="-1">1.常用软件介绍 <a class="header-anchor" href="#_1-常用软件介绍" aria-label="Permalink to “1.常用软件介绍”">​</a></h1><ul><li><code>Anaconda</code>：jupyter notebook 更适合 DS/DA</li><li><code>Vscode</code>：插件丰富</li><li><code>Excel</code>：交互查看数据，传播方便，目前不可替代</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("文章/数据分析/Pandas/1.常用软件介绍.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_______ as default
};
