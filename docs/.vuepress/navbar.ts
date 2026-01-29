/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
{
    text: '文档',
    icon: 'line-md:file-document-twotone',
    items: [
      {
        text: '笔记',
        icon: 'material-symbols:assignment-rounded',
        items: 
        [
          {
            text: '我的项目',
            icon: 'material-symbols:deployed-code',
            link: '/note/my project/README/'
          },
          {
            text: '优质项目',
            icon: 'material-symbols:auto-awesome-rounded',
            link: '/note/greatproject/README/'
          },
          {
            text: '指导笔记',
            icon: 'material-symbols:co-present-sharp',
            link: '/note/teaching note/README/'
          }
        ]
      }
    ],
  },
  {
    text: '作品', 
    icon: 'line-md:lightbulb-twotone',
    items: 
    [
      {
       text: '博客文章',
       icon: 'material-symbols:demography-rounded',
       link: '/blog/'
      },
      {
        text: '文章', 
      icon: 'material-symbols:article-outline-rounded',
      items: 
        [
          {
            text: '诗歌',
            icon:'material-symbols:book-2-rounded',
            link:'/作品/诗歌/lead/',
          },
          {
            text: '次级诗歌',
            icon: 'material-symbols:book-4-spark-rounded',
            link: '/作品/次级诗歌/lead/'
          },
          {
            text: '歌词',
            icon: 'material-symbols:queue-music-rounded',
            link: '/作品/歌词/lead/'
          },
        ],
      },
      {
        text: '其他',
        icon: 'material-symbols:arrow-split-rounded',
        items:
        [
          {
            text: '收集',
            icon: 'material-symbols:bookmark-star-sharp',
            link: '/lead/other/collection/lead/'
          },
          {
            text: '杂物',
            icon: 'material-symbols:database-sharp',
            link: '/lead/other/sunderies/lead/'
          },
        ]
      },
    ]
  },  
  {
   text: '关于',
   icon: 'ri:information-2-fill',
   items:
  [
    {
      text: '站点内',
      icon: 'ri:inbox-2-fill',
      items:
      [
        {
         text: '关于本站点',
         icon: 'ri:window-line',
         link: ''
        },
        {
         text: '关于站长',
         icon: 'ri:account-circle-2-fill',
         link: ''
        },
      ],
    },
    {
      text: '站点外',
      icon: 'ri:arrow-right-up-long-line',
      items:
      [
        {
         text: '关于博客站点',
         icon: 'ri:window-2-fill',
         link: ''
        },
        {
         text: '博客站点',
         icon: 'line-md:telegram',
         link: 'https://fuyunxinyu.github.io/'
        },
      ]
    },
  ]
  },
  {
    text: '更多',
    icon: 'line-md:grid-3-twotone',
    items:
    [
      {
        text: '友链',
        icon: 'ri:chat-smile-3-fill',
        link: '/friends/'
      },
      {
        text: '班级相关',
        icon: 'material-symbols:auto-awesome-mosaic',
        link: '/other/sunderies/class/README/'
      },
    ]
  },
])


/* English
  ----------------------------------------------------------------------*/
export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

