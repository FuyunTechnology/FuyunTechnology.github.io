/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { text } from 'mermaid/dist/rendering-util/rendering-elements/shapes/text.js'
import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页',
    icon: 'line-md:home-twotone',
     link: '/' 
    },
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
            link: '/notes/我的项目/README.md'
          },
          {
            text: '优质项目',
            icon: 'material-symbols:auto-awesome-rounded',
            link: '/notes/优质项目/README.md'
          },
          {
            text: '指导笔记',
            icon: 'material-symbols:co-present-sharp',
            link: '/notes/指导笔记/README.md'
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
            link:'/作品/诗歌/README.md',
          },
          {
            text: '次级诗歌',
            icon: 'material-symbols:book-4-spark-rounded',
            link: '/作品/次级诗歌/README.md'
          },
          {
            text: '歌词',
            icon: 'material-symbols:queue-music-rounded',
            link: '/作品/歌词/README.md'
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
            link: '/其他/收集/README.md'
          },
          {
            text: '杂物',
            icon: 'material-symbols:database-sharp',
            link: '/其他/杂物/README.md'
          }
        ]
      }
    ]
  },  
  {
    text: '更多',
    icon: 'line-md:grid-3-twotone',
    items:
    [
      {
    text: '博客站点',
    icon: 'line-md:telegram',
    link: 'https://fuyunxinyu.github.io/'
      },
      {
        text: '作业',
        icon: 'pajamas:issue-type-requirements',
        link: '/博客文章/其他/杂物/Homework.html'
      },
      {
        text: '更多内容待更新',
        icon: 'material-symbols:battery-charging-20-outline-sharp',
        link: ''
      },
    ]
  },

])
