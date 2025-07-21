import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AC高级命令文档",
  description: "只需1分钟，让你的世界大变样！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '命令列表', link: '/commands' }
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '行为包介绍', link: '/intro' },
          { text: '安装', link: '/install' },
        ]
      },
      {
        text: '命令列表',
        items: [
          { text: 'sgive', link: '/commands/sgive'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neverforward/AdvancedCommand' }
    ],

    logo: 'static/logo.png'
  },
  head: [
    ['link', { rel: 'icon', href: '/static/favicon.ico' }]
  ],
  lang: 'zh-CN'
})
