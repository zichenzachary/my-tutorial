import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_3 } from "./NumPy-3.UdrCzsaH.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5.NumPy小结-功能篇","description":"","frontmatter":{},"headers":[],"relativePath":"文章/数据分析/NumPy/5.NumPy小结-功能篇.md","filePath":"文章/数据分析/NumPy/5.NumPy小结-功能篇.md","lastUpdated":0}');
const _sfc_main = { name: "文章/数据分析/NumPy/5.NumPy小结-功能篇.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-numpy小结-功能篇" tabindex="-1">5.NumPy小结-功能篇 <a class="header-anchor" href="#_5-numpy小结-功能篇" aria-label="Permalink to “5.NumPy小结-功能篇”">​</a></h1><p align="center"><img${ssrRenderAttr("src", _imports_3)} alt="NumPy-3"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("文章/数据分析/NumPy/5.NumPy小结-功能篇.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _5_NumPy______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _5_NumPy______ as default
};
