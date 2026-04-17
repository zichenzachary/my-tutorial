import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN', 
  title: "Zach的VitePress文档",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/简明LaTex教程/简明LaTex教程' } 
    ],

    sidebar: [
      {
        text: '示例',
        collapsed: false,
        items: [
          { text: '样式预览', link: '/样式预览/样式预览' },
          { text: '建站指南', link: '/建站指南/建站指南' }

        ]
      },
      {
        text: '文章',
        collapsed: false,
        items: [
          { text: '简明LaTex教程', link: '/简明LaTex教程/简明LaTex教程' },
          { text: 'Jupyter命令', link: '/数据科学/Jupyter命令/Jupyter命令' },
          { text: 'NumPy', link: '/数据科学/NumPy/NumPy' },
          { text: 'Pandas', link: '/数据科学/Pandas/Pandas' },
          { text: 'Matplotlib', link: '/数据科学/Matplotlib/Matplotlib' },
          { text: 'Seaborn', link: '/数据科学/Seaborn/Seaborn' }
        ]
      }
    ],

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
      lazyLoading: false  // true
    }
  }
})
