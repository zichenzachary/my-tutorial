import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./Seaborn-1.DWvxZPAJ.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1.Seaborn简介","description":"","frontmatter":{},"headers":[],"relativePath":"文章/数据分析/Seaborn/1.Seaborn简介.md","filePath":"文章/数据分析/Seaborn/1.Seaborn简介.md","lastUpdated":0}');
const _sfc_main = { name: "文章/数据分析/Seaborn/1.Seaborn简介.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-seaborn简介" tabindex="-1">1.Seaborn简介 <a class="header-anchor" href="#_1-seaborn简介" aria-label="Permalink to “1.Seaborn简介”">​</a></h1><h2 id="_1-1-简介" tabindex="-1">1.1 简介 <a class="header-anchor" href="#_1-1-简介" aria-label="Permalink to “1.1 简介”">​</a></h2><p align="center"><img${ssrRenderAttr("src", _imports_0)} width="150" alt="Seaborn"></p><p>Seaborn 的特点：</p><ol><li>`);
  _push(ssrRenderComponent(_component_font, { color: "#76923c" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`统计数据可视化`);
      } else {
        return [
          createTextVNode("统计数据可视化")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：Seaborn 专注于统计数据可视化，旨在帮助用户更轻松地探索和理解数据的分布、关系和趋势。</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "#76923c" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`美观的默认样式`);
      } else {
        return [
          createTextVNode("美观的默认样式")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：Seaborn 具有吸引人的默认绘图样式和颜色主题，使图表在外观上更具吸引力。</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "#76923c" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`内置数据集支持`);
      } else {
        return [
          createTextVNode("内置数据集支持")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：Seaborn 包含一些内置的示例数据集，用户可以用来练习和演示数据可视化技巧，这些数据集涵盖了不同领域的数据。</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "#76923c" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`轻度定制化能力`);
      } else {
        return [
          createTextVNode("轻度定制化能力")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：虽然 Seaborn 提供了美观的默认样式，但用户仍然可以轻松地自定义图表的各个方面，包括颜色、线型、标记、标题等，以满足特定需求。</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "#76923c" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`集成统计方法`);
      } else {
        return [
          createTextVNode("集成统计方法")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：Seaborn 提供了方便的函数来集成统计方法，如拟合回归线、绘制置信区间和展示数据的分布。</li></ol><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({ "--shiki-light": "#24292e", "--shiki-dark": "#e1e4e8", "--shiki-light-bg": "#fff", "--shiki-dark-bg": "#24292e" })}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> seaborn </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">as</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> sns</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># 查看seaborn的版本</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">sns.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">__version__</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}"># 设置全局绘图风格                           </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">sns.set(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;darkgrid&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">color_codes</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">True</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span></code></pre></div><table tabindex="0"><thead><tr><th>style 值</th><th>描述</th></tr></thead><tbody><tr><td><code>darkgrid</code>（默认）</td><td>有网格的深色背景（常用，适合折线/趋势图）</td></tr><tr><td><code>whitegrid</code></td><td>白色背景 + 网格（适合统计图，如箱线图、柱状图）</td></tr><tr><td><code>dark</code></td><td>纯深色背景，无网格</td></tr><tr><td><code>white</code></td><td>纯白背景，无网格（适合出版或论文）</td></tr><tr><td><code>ticks</code></td><td>白色背景 + 坐标轴刻度样式</td></tr></tbody></table><p><code>color_codes=True</code>（默认 <code>False</code>）：启用 Seaborn 的颜色简写系统</p><h2 id="_1-2-seaborn-绘图函数血缘关系" tabindex="-1">1.2 Seaborn 绘图函数血缘关系 <a class="header-anchor" href="#_1-2-seaborn-绘图函数血缘关系" aria-label="Permalink to “1.2 Seaborn 绘图函数血缘关系”">​</a></h2><ol><li>Seaborn 绘图函数按照图形展示的信息可以主要分类成统计关系图类 <code>relplot</code> 、变量分布图类 <code>distplot</code> 以及分类数据图类 <code>catplot</code></li><li>每个类都有更加细化需求的<em>高阶封装</em>，比如 <code>lineplot</code> 是对 <code>relplot</code> 的高级封装</li><li>除了右侧图片所示的函数，还有曲线拟合绘图函数 <code>regplot</code>/<code>lmplot</code> 以及热力图 <code>heatmap</code> 等常用函数</li><li>总体使用法则是<em>先使用高级封装的函数</em>，例如 <code>kdeplot</code>，如果在做定制化的时候不如人意，可以切换成对应的低阶函数 (例如 <code>distplot</code>)</li></ol><p align="center"><img${ssrRenderAttr("src", _imports_1)} width="400" alt="Seaborn-1"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("文章/数据分析/Seaborn/1.Seaborn简介.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_Seaborn__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_Seaborn__ as default
};
