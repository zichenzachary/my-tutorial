import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_67, a as _imports_68, b as _imports_69 } from "./Seaborn-69.CJJ3ZDja.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6.Onesky数据处理","description":"","frontmatter":{},"headers":[],"relativePath":"文章/数据分析/Seaborn/6.Onesky数据处理.md","filePath":"文章/数据分析/Seaborn/6.Onesky数据处理.md","lastUpdated":1776831579000}');
const _sfc_main = { name: "文章/数据分析/Seaborn/6.Onesky数据处理.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-onesky数据处理" tabindex="-1">6.Onesky数据处理 <a class="header-anchor" href="#_6-onesky数据处理" aria-label="Permalink to “6.Onesky数据处理”">​</a></h1><h2 id="_6-1-onesky-数据集简介" tabindex="-1">6.1 Onesky 数据集简介 <a class="header-anchor" href="#_6-1-onesky-数据集简介" aria-label="Permalink to “6.1 Onesky 数据集简介”">​</a></h2><p>Onesky 数据集是一家专门收集<em>空气质量数据</em>的公司在 2022-2023 年某段时间收集的数据集，里面包含各种气体指数以及 pm1/2.5/10 指数，数据读取时间等字段，<em>样本量为 58767 左右</em>。具体详情看下方数据框。</p><p align="center"><img${ssrRenderAttr("src", _imports_67)} width="325" alt="Seaborn-67"></p><h2 id="_6-2-数据处理流程简介" tabindex="-1">6.2 数据处理流程简介 <a class="header-anchor" href="#_6-2-数据处理流程简介" aria-label="Permalink to “6.2 数据处理流程简介”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_68)} alt="Seaborn-68"></p><h2 id="_6-3-数据处理流程简介-代码" tabindex="-1">6.3 数据处理流程简介（代码） <a class="header-anchor" href="#_6-3-数据处理流程简介-代码" aria-label="Permalink to “6.3 数据处理流程简介（代码）”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_69)} alt="Seaborn-69"></p><h2 id="_6-4-数据处理过程" tabindex="-1">6.4 数据处理过程 <a class="header-anchor" href="#_6-4-数据处理过程" aria-label="Permalink to “6.4 数据处理过程”">​</a></h2><p>见 notebook</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("文章/数据分析/Seaborn/6.Onesky数据处理.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _6_Onesky____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _6_Onesky____ as default
};
