import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_10, a as _imports_11, b as _imports_12 } from "./Pandas-12.DM7Y7MW5.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4.PandasSeries介绍","description":"","frontmatter":{},"headers":[],"relativePath":"文章/数据分析/Pandas/4.PandasSeries介绍.md","filePath":"文章/数据分析/Pandas/4.PandasSeries介绍.md","lastUpdated":1776831579000}');
const _sfc_main = { name: "文章/数据分析/Pandas/4.PandasSeries介绍.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-pandasseries介绍" tabindex="-1">4.PandasSeries介绍 <a class="header-anchor" href="#_4-pandasseries介绍" aria-label="Permalink to “4.PandasSeries介绍”">​</a></h1><h2 id="_4-1-函数-数值篇" tabindex="-1">4.1 函数（数值篇） <a class="header-anchor" href="#_4-1-函数-数值篇" aria-label="Permalink to “4.1 函数（数值篇）”">​</a></h2><p>统计函数</p><ol><li><code>ds.describe()</code> 总体描述</li><li><code>ds.count()</code> 计数</li><li><code>ds.min()</code></li><li><code>ds.max()</code></li><li><code>ds.mean()</code></li><li><code>ds.value_counts()</code><ul><li>统计 Series 中每个元素数据出现的次数</li><li>将元素变为 <code>index</code>，并且生成新 <code>Series</code></li></ul></li><li><code>ds.quantile()</code> 分位数</li><li><code>ds.std()</code> 标准差</li><li><code>ds.median()</code> 中位数</li><li><code>ds.cumsum()</code> 累计求和</li><li><code>ds.cumprod()</code> 累计乘积</li></ol><p>其他函数参考 notebook</p><h2 id="_4-2-函数-字符串篇" tabindex="-1">4.2 函数（字符串篇） <a class="header-anchor" href="#_4-2-函数-字符串篇" aria-label="Permalink to “4.2 函数（字符串篇）”">​</a></h2><ol><li><code>ds.str.replace(value1, value2)</code> 字符串替换</li><li><code>ds.str.contains(value)</code> 判断字符串是否包含 value</li><li><code>ds.str.split(sep)</code> 按照分隔符 sep 把字符串分割</li><li><code>ds.str.join()</code> 字符间填充</li><li><code>ds.str.slice()</code> 字符串切片</li><li><code>ds.str.count()</code> 统计 Series 中指定元素数据出现的次数，可以设定位置范围</li><li><code>ds.str.startswith(value)</code> 判断字符串是否以 value 开头</li><li><code>ds.str.endswith(value)</code> 判断字符串是否以 value 结尾</li><li><code>ds.str.len()</code> 返回字符串的长度</li><li><code>ds.str.strip()</code> 去除字符串的空格</li><li><code>ds.str.lower()</code> 字符全部小写</li><li><code>ds.str.upper()</code> 字符全部大写</li></ol><h2 id="_4-3-series-转成-dataframe" tabindex="-1">4.3 Series 转成 DataFrame <a class="header-anchor" href="#_4-3-series-转成-dataframe" aria-label="Permalink to “4.3 Series 转成 DataFrame”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_10)} alt="Pandas-10"></p><h2 id="_4-4-apply-自定义函数" tabindex="-1">4.4 apply 自定义函数 <a class="header-anchor" href="#_4-4-apply-自定义函数" aria-label="Permalink to “4.4 apply 自定义函数”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_11)} alt="Pandas-11"></p><h2 id="_4-5-排序" tabindex="-1">4.5 排序 <a class="header-anchor" href="#_4-5-排序" aria-label="Permalink to “4.5 排序”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_12)} alt="Pandas-12"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("文章/数据分析/Pandas/4.PandasSeries介绍.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _4_PandasSeries__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _4_PandasSeries__ as default
};
