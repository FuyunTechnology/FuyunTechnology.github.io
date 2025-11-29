/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'



/* =================== locale: zh-CN ======================= */


const 我的项目 =defineCollection({
  title: '我的项目 -导航' ,
  type: 'doc',
  dir: '/文档笔记/我的项目/',
  sidebar: 
  [ // 手动配置导航项
    {
      text: '导航',
      link : '/文档笔记/我的项目/README/',
      icon: 'uil:location-arrow',
    },
    { 
      text: '网站(前端)',
      icon: 'ri:window-fill' ,
      items :
      [
        {
          text: '四季游棂',
          link: '/文档笔记/我的项目/前端/四季游棂/README/',
        }
      ],
    }
  ],
  sidebarScrollbar: true, // 显示侧边栏滚动条
})



const 优质项目 = defineCollection ({
  title: '优质项目' ,
  type: 'doc',
  dir: '/文档笔记/优质项目/',
  sidebar: 
  [ // 手动配置导航项
    { 
      text: '介绍',
      link: 'intro',
      icon: 'mdi:tooltip-text-outline' 
    }
  ],
  sidebarScrollbar: true, // 显示侧边栏滚动条
})



const 指导笔记 = defineCollection({ 
  title: '指导笔记' ,
  type: 'doc',
  dir: '/文档笔记/指导笔记/',
  linkPrefix: '/文档笔记/指导笔记/',
  sidebar:[ {   //'auto',
                // 手动配置导航项
              text: '引子',
              link : 'README/',
              icon: 'uil:location-arrow',
            },
            {
              text: '前端',
              icon: '',
              prefix: '前端/',
              items:[ {
                      text: 'Valaxy',
                      icon: '' ,
                      collapsed: false,
                      prefix: 'Valaxy/',
                      items : [ {
                                  text: '准备篇',
                                  link: 'preparing/',
                                },
                                {
                                  text: '配置篇',
                                  link: 'settings/',
                                },
                                {
                                  text: '部署篇',
                                  link: 'pushing/',
                                },
                                {
                                  text: '行文篇',
                                  link: 'writing/',
                                },
                                {
                                  text: '进阶/自定义',
                                  link: 'progressing/',
                                },
                                {
                                  text: 'Valaxy友链',
                                  link: 'friends/',
                                },
                              ],
                      },
                      {
                      text: 'Vuepress-plume',
                      icon: 'mdi:vuejs' ,
                      collapsed: false,
                      prefix: 'Vuepress-plume/',
                      items : [ {
                                 text: '引子',
                                 link: 'starting/',
                                },
                                {
                                 text: '配置',
                                 link: 'settings/',
                                },
                                {
                                 text: '行文',
                                 link: 'writing/',
                                },
                                {
                                 text: '组件',
                                 link: 'component/',
                                },
                                {
                                 text: 'plume友链',
                                 link: 'friends/',
                                },
                              ]
                      },
                      {
                        text: 'Git的使用',
                        icon: 'mdi:git',
                        link: 'Git/'
                      },
                    ],
            },
            {
              text: '程序',
              icon: '',
              prefix: '程序/',
              items: 'auto'
            },
          ],
  sidebarScrollbar: true,   // 显示侧边栏滚动条
})



const 博客文章 = defineCollection({
  title: '博客文章' ,
  type: 'post',
  dir: '/博客文章/',
  postList: true, // 启用文章列表页
  link: '/blog/', // 列表页链接
  linkPrefix: '/blog/', // 文章链接前缀
  tags: true, // 启用标签页
  tagsLink: '/blog/tags/', // 标签页链接
  tagsTheme: 'brand', // 标签主题 colored|gray|brand
  tagsText: '标签', // 标签页标题
  archives: true, // 启用归档页
  archivesLink: '/blog/archives/', // 归档页链接
  archivesText: '归档', // 归档页标题
  categories: true, // 启用分类页
  categoriesLink: '/blog/categories/', // 分类页链接
  categoriesText: '分类', // 分类页标题
  categoriesExpand: 'deep', // 分类展开层级 number|'deep'
  categoriesTransform: categories => categories, // 分类转换函数
})



const 迭变 = defineCollection({
  title: '迭变' ,
  type: 'doc',
  dir: '/文档笔记/我的项目/迭变/',
  sidebar: 
  [ // 手动配置导航项
    { 
      text: '介绍',
      link: 'intro',
      icon: 'mdi:tooltip-text-outline' 
    }
  ],
  sidebarScrollbar: true, // 显示侧边栏滚动条
})



const 浮雨 = defineCollection({
  title: '浮雨' ,
  type: 'doc',
  linkPrefix: '/文档笔记/我的项目/浮雨/',
  dir: '/文档笔记/我的项目/浮雨/',
  sidebar: 
  [ // 手动配置导航项
    { 
      text: '介绍',
      link: 'intro',
      icon: 'mdi:tooltip-text-outline' 
    }
  ],
  sidebarScrollbar: true, // 显示侧边栏滚动条
})



const 四季游棂 = defineCollection({
  title: '四季游棂' ,
  type: 'doc',
  linkPrefix: '/文档笔记/我的项目/四季游棂/',
  dir: '/文档笔记/我的项目/四季游棂/',
  sidebar: 
  [ // 手动配置导航项
    { 
      text: '介绍',
      link: '',
      icon: 'mdi:tooltip-text-outline' 
    }
  ],
  sidebarScrollbar: true, // 显示侧边栏滚动条
})







/**
 * 导出所有的 collections
 *  (zhBlog 为博客示例，如果不需要博客功能，请删除)
 *  (zhDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const zhCollections = defineCollections([
  我的项目,
  优质项目,
  指导笔记,
  博客文章,
  四季游棂,
  迭变,
  浮雨,
])



/* =================== locale: en-US ======================= */







/**
 * 导出所有的 collections
 *  (enBlog 为博客示例，如果不需要博客功能，请删除)
 *  (enDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const enCollections = defineCollections([

])

