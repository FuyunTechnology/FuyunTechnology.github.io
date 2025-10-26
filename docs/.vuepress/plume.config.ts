/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enCollections, zhCollections } from './collections'
import { enNavbar, zhNavbar } from './navbar'



/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式


  
  social: [
     { icon: 'github', link: 'https://github.com/FuyunTechnology' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3


  
  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
    copyright: {
     license: {
         name: 'CC BY-NC-SA 4.0 ', // 许可证名称
         url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans' // 许可证地址
       },
       author: {
         name: 'Fuyun & FuyunTechnology', // 版权所有者名称
         url: 'https://bgithub.xyz/FuyunTechnology' // 版权所有者地址
       },
       creation: 'original' // 创作方式
       },


  
  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间



  /* 站点页脚 */
  footer: {
    message: '由 <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a>驱动 & 使用主题 <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: '转载请注意版权问题',
  },



  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: true,  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },



  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
    //appearanceText:'外观',
    //selectLanguageName:'简体中文',
    //homeText:'主页',
    //archivesText: '归档',
    //categoriesText: '分类',
    //postsText:'文章',
    archiveTotalText:'创作了 {count} 篇文章',
    //sidebarMenuLabel:'菜单',
    //tagsText: '标签', // 标签页标题
    //returnToTopLabel:'返回顶部',
    //outlineLabel:'大纲',
    //editLinkText:'编辑此页',
    //lastUpdatedText:'最后更新',
    //contributorsText:'贡献者',
    //changelogText:'变更记录',
    //changelogOnText:'On',
    //changelogButtonText:'查看所有变更',
    //copyrightText:'版权所有',
    //copyrightAuthorText:'版权所有者',
    //copyrightCreationOriginalText:'本文链接',
    //copyrightCreationTranslateText:'翻译文本链接',
    //copyrightCreationReprintText:'转载链接',
    
    
    collections: 
   [ 
    { 
      title: '博客文章' ,
      type: 'post',
      dir: '博客文章',
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
    },
    { 
      title: '文档笔记' ,
      type: 'doc',
      dir: '文档笔记',
        sidebar: 
        [ // 手动配置导航项
          '1',
          '2',
        ],
        sidebarScrollbar: true, // 显示侧边栏滚动条
    },
    { 
      title: '文章导航' ,
      type: 'doc',
      dir: '文章导航',
        sidebar: 
        [ // 手动配置导航项
          '1',
          '2',
        ],
        sidebarScrollbar: true, // 显示侧边栏滚动条
    },
   ],


    profile: {
    avatar: '/image/site/Avatar.png',
    name: '浮芸星语空悠悠',
    description: '余生漫漫,不见 不散',
    circle: true,
    location: '中国',
    organization: 'FuyunTechnology',
    },

    navbar: zhNavbar,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: '',
         content: '',
       },
    },



    '/en/': { 
   /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
    profile: {
    avatar: '/image/site/Avatar.png',
    name: '浮芸星语空悠悠',
    description: '余生漫漫,不见 不散',
    circle: true,
    location: 'China',
    organization: 'FuyunTechnology',
    },

      navbar: enNavbar,
      collections: enCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       bulletin: {
         layout: 'top-right',
         contentType: 'markdown',
         title: '',
         content: '',
       },
    },
  },
})
