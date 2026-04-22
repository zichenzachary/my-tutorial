/// <reference path="./env.d.ts" />

import { defineConfig } from 'vitepress'
import markdownItMark from 'markdown-it-mark'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN', 
  title: "Zach的VitePress文档",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
  ],

  
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        activeMatch: '^/文章/',
        items: [
          { text: '示例', link: '/文章/示例/样式预览/样式预览' },
          { text: '其他', link: '/文章/其他/简明LaTex教程/简明LaTex教程' },
          { text: '办公', link: '/文章/办公/Word实用技能培训/1.内容编辑' },
          { text: '数据分析', link: '/文章/数据分析/Jupyter命令/Jupyter命令' }
        ]
      },
      
    ],

    sidebar: {
      '/文章/示例/': { items: sidebarExample() },
      '/文章/其他/': { items: sidebarOther() },
      '/文章/办公/': { items: sidebarOffice() },
      '/文章/数据分析/': { items: sidebarDataAnalysis() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zichenzachary' } 
    ],

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        forceLocale: true,
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2025-至今 Zachary'
    },  

    search: {
      provider: 'algolia',
      options: {
        appId: 'KOAQJCPAQO',
        apiKey: '2f50f79fc3277ed41bd6b611bb39d8ff',
        indexName: 'doc',

        // 搜索弹窗 + Ask AI 侧边栏
        mode: 'hybrid',

        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBox: {
              clearButtonTitle: '清除',
              clearButtonAriaLabel: '清除查询',
              closeButtonText: '关闭',
              closeButtonAriaLabel: '关闭',
              placeholderText: '搜索文档或向 AI 提问',
              placeholderTextAskAi: '再问一个问题...',
              placeholderTextAskAiStreaming: '正在回答...',
              searchInputLabel: '搜索',
              backToKeywordSearchButtonText: '返回关键词搜索',
              backToKeywordSearchButtonAriaLabel: '返回关键词搜索'
            },
            footer: {
              selectText: '选择',
              submitQuestionText: '提交问题',
              navigateText: '导航',
              closeText: '关闭',
              backToSearchText: '返回搜索',
              closeKeyAriaLabel: 'Esc 键',
              poweredByText: '搜索提供者'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查网络连接。'
            },
            startScreen: {
              recentSearchesTitle: '最近',
              noRecentSearchesText: '暂无最近搜索',
              favoriteSearchesTitle: '收藏'
            },
            noResultsScreen: {
              noResultsText: '未找到相关结果',
              suggestedQueryText: '尝试搜索',
              reportMissingResultsText: '认为此查询应该有结果？',
              reportMissingResultsLinkText: '告诉我们。'
            },
            resultsScreen: {
              askAiPlaceholder: '询问 AI：',
              noResultsAskAiPlaceholder: '文档里没找到？让 Ask AI 帮忙：'
            },
            askAiScreen: {
              disclaimerText: '回答由 AI 生成，可能会出错。请核实。',
              relatedSourcesText: '相关来源',
              thinkingText: '思考中...',
              copyButtonText: '复制',
              copyButtonCopiedText: '已复制！',
              copyButtonTitle: '复制',
              likeButtonTitle: '喜欢',
              dislikeButtonTitle: '不喜欢',
              thanksForFeedbackText: '感谢你的反馈！',
              preToolCallText: '搜索中...',
              duringToolCallText: '搜索中...',
              afterToolCallText: '已搜索',
              stoppedStreamingText: '你已停止此回复',
              errorTitleText: '聊天错误',
              threadDepthExceededMessage: '为保持回答准确，此对话已关闭。',
              startNewConversationButtonText: '开始新的对话'
            }
          }
        },

        askAi: {
          assistantId: 'aceed650-ff5b-4dc6-9aba-3bd78ac6672f',
          agentStudio: true,
          sidePanel: {
            agentStudio: true,
            panel: {
              variant: 'floating',
              side: 'right',
              width: '360px',
              expandedWidth: '580px',
              suggestedQuestions: true,

              translations: {
                header: {
                  title: '询问 AI',
                  conversationHistoryTitle: '我的对话历史',
                  newConversationText: '开始新的对话',
                  viewConversationHistoryText: '对话历史'
                },
                promptForm: {
                  promptPlaceholderText: '提问',
                  promptAnsweringText: '正在回答...',
                  promptAskAnotherQuestionText: '再问一个问题',
                  promptDisclaimerText: '回答由 AI 生成，可能会出错。',
                  promptLabelText: '按回车发送，Shift+回车换行。',
                  promptAriaLabelText: '问题输入'
                },
                conversationScreen: {
                  preToolCallText: '搜索中...',
                  searchingText: '搜索中...',
                  toolCallResultText: '已搜索',
                  conversationDisclaimer: '回答由 AI 生成，可能会出错。请核实。',
                  reasoningText: '推理中...',
                  thinkingText: '思考中...',
                  relatedSourcesText: '相关来源',
                  stoppedStreamingText: '你已停止此回复',
                  copyButtonText: '复制',
                  copyButtonCopiedText: '已复制！',
                  likeButtonTitle: '喜欢',
                  dislikeButtonTitle: '不喜欢',
                  thanksForFeedbackText: '感谢你的反馈！',
                  errorTitleText: '聊天错误'
                },
                newConversationScreen: {
                  titleText: '我今天能帮你什么？',
                  introductionText:
                    '我会搜索你的文档，快速帮你找到设置指南、功能细节和故障排除提示。'
                },
                logo: {
                  poweredByText: '搜索提供者'
                }
              }
            },
            button: {
              translations: {
                buttonText: '询问 AI',
                buttonAriaLabel: '询问 AI'
              }
            }
          } as any
        }
      }
    }
  },

  markdown: {
    math: true,
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(markdownItMark)
    }
  }
})

function sidebarExample() {
  return [
    {
      text: '示例',
      collapsed: false,
      items: [
        { text: '样式预览', link: '/文章/示例/样式预览/样式预览' },
        { text: '建站指南', link: '/文章/示例/建站指南/建站指南' }
      ]
    }
  ]
}

function sidebarOther() {
  return [
    {
      text: '其他',
      collapsed: false,
      items: [
        { text: '简明LaTex教程', link: '/文章/其他/简明LaTex教程/简明LaTex教程' },
        { text: '数据结构', link: '/文章/其他/数据结构/数据结构' }
      ]
    }
  ]
}

function sidebarOffice() {
  return [
    {
      text: 'Word实用技能培训',
      collapsed: false,
      items: [
        { text: '1.内容编辑', link: '/文章/办公/Word实用技能培训/1.内容编辑' },
        { text: '2.页面设置与整体排版', link: '/文章/办公/Word实用技能培训/2.页面设置与整体排版' },
        { text: '3.高效文档处理（单文件、长文档）（上）', link: '/文章/办公/Word实用技能培训/3.高效文档处理（单文件、长文档）（上）' },
        { text: '4.高效文档处理（单文件、长文档）（下）', link: '/文章/办公/Word实用技能培训/4.高效文档处理（单文件、长文档）（下）' },
        { text: '5.高效文档处理（多文件）', link: '/文章/办公/Word实用技能培训/5.高效文档处理（多文件）' }
      ]
    }
  ]
}

function sidebarDataAnalysis() {
  return [
    {
      text: 'Jupyter命令',
      items: [
        { text: 'Jupyter命令', link: '/文章/数据分析/Jupyter命令/Jupyter命令/' }
      ]
    },
    {
      text: 'NumPy',
      items: [
        { text: '1.NumPy简介与数组基础计算', link: '/文章/数据分析/NumPy/1.NumPy简介与数组基础计算' },
        { text: '2.NumPy数组形态转换与计算', link: '/文章/数据分析/NumPy/2.NumPy数组形态转换与计算' },
        { text: '3.NumPy数组广播机制与进阶操作', link: '/文章/数据分析/NumPy/3.NumPy数组广播机制与进阶操作' },
        { text: '4.NumPy文件读写', link: '/文章/数据分析/NumPy/4.NumPy文件读写' },
        { text: '5.NumPy小结-功能篇', link: '/文章/数据分析/NumPy/5.NumPy小结-功能篇' },
      ]
    },
    {
      text: 'Pandas',
      items: [
        { text: '1.常用软件介绍', link: '/文章/数据分析/Pandas/1.常用软件介绍' },
        { text: '2.Pandas基础结构与读写', link: '/文章/数据分析/Pandas/2.Pandas基础结构与读写' },
        { text: '3.Pandas常见函数与数据处理', link: '/文章/数据分析/Pandas/3.Pandas常见函数与数据处理' },
        { text: '4.PandasSeries介绍', link: '/文章/数据分析/Pandas/4.PandasSeries介绍' },
        { text: '5.Pandas分组聚合', link: '/文章/数据分析/Pandas/5.Pandas分组聚合' },
        { text: '6.Pandas数据变形', link: '/文章/数据分析/Pandas/6.Pandas数据变形' },
        { text: '7.Series排名函数、位移函数与可视化', link: '/文章/数据分析/Pandas/7.Series排名函数、位移函数与可视化' },
        { text: '8.DataFrame时间序列处理与可视化', link: '/文章/数据分析/Pandas/8.DataFrame时间序列处理与可视化' },
        { text: '9.Pandas小结-功能篇', link: '/文章/数据分析/Pandas/9.Pandas小结-功能篇' }
      ]
    },
    {
      text: 'Matplotlib',
      items: [
        { text: '1.Matplotlib简介', link: '/文章/数据分析/Matplotlib/1.Matplotlib简介' },
        { text: '2.Matplotlib绘图函数', link: '/文章/数据分析/Matplotlib/2.Matplotlib绘图函数' },
        { text: '3.Matplotlibsubplot', link: '/文章/数据分析/Matplotlib/3.Matplotlibsubplot' }
      ]
    },
    {
      text: 'Seaborn',
      items: [
        { text: '1.Seaborn简介', link: '/文章/数据分析/Seaborn/1.Seaborn简介' },
        { text: '2.Seaborn统计关系绘图', link: '/文章/数据分析/Seaborn/2.Seaborn统计关系绘图' },
        { text: '3.Seaborn分类数据绘图', link: '/文章/数据分析/Seaborn/3.Seaborn分类数据绘图' },
        { text: '4.Seaborn变量分布绘图', link: '/文章/数据分析/Seaborn/4.Seaborn变量分布绘图' },
        { text: '5.Seaborn曲线拟合绘图', link: '/文章/数据分析/Seaborn/5.Seaborn曲线拟合绘图' },
        { text: '6.Onesky数据处理', link: '/文章/数据分析/Seaborn/6.Onesky数据处理' },
        { text: '7.Seaborn知识点补充', link: '/文章/数据分析/Seaborn/7.Seaborn知识点补充' },
        { text: '8.Seaborn-Onesky单变量可视化分析', link: '/文章/数据分析/Seaborn/8.Seaborn-Onesky单变量可视化分析' },
        { text: '9.Seaborn-Onesky变量间可视化分析', link: '/文章/数据分析/Seaborn/9.Seaborn-Onesky变量间可视化分析' },
        { text: '10.利用Matplotlib和Seaborn搭建仪表盘', link: '/文章/数据分析/Seaborn/10.利用Matplotlib和Seaborn搭建仪表盘' },
        { text: '11.数据分析四件套掌握程度总结', link: '/文章/数据分析/Seaborn/11.数据分析四件套掌握程度总结' }
      ]
    }
  ]
}
