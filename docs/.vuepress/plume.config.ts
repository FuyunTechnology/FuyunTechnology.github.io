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
  logo: '/image/site/Cloud.png',

  appearance: true,  // 配置 深色模式
  
  social: [
     { icon: 'github', link: 'https://github.com/FuyunTechnology' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 4], // 页内大纲， 默认显示 h2, h3


  
  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: {
    license: {
              name: 'CC BY-NC-SA 4.0 署名—非商业性—相同方式共享', // 许可证名称
              url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans' // 许可证地址
             },
    author: {
               name: 'Fuyun & FuyunTechnology', // 版权所有者名称
               url: 'https://github.com/FuyunTechnology' // 版权所有者地址
            },
     creation: 'original' // 创作方式
     },


  
  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间



  /* 站点页脚 */
  footer: {
    message: 
    '由 <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a>驱动 & 使用主题 <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: '转载请注意版权问题',
  },



  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'circle-clip',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },


  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
    //appearanceText: '外观',
    //selectLanguageName: '简体中文',
    //homeText: '主页',
    //archiveText: '归档',
    //categoryText: '分类',
    //tagsText: '标签',
    //postsText: '文章',
    archiveTotalText:'创作了 {count} 篇文章',
    //sidebarMenuLabel: '菜单',
    //returnToTopLabel: '返回顶部',
    //outlineLabel: '大纲',
    //editLinkText: '编辑此页',
    //lastUpdatedText: '最后更新',
    //contributorsText: '贡献者',
    //changelogText: '变更记录',
    //changelogOnText: 'On',
    //changelogButtonText: '查看所有变更',
    //copyrightText: '版权所有',
    //copyrightAuthorText:'版权所有者',
    //copyrightCreationOriginalText: '本文链接',
    //copyrightCreationTranslateText: '翻译文本链接',
    //copyrightCreationReprintText: '转载链接',
    //copyrightLicenseText: '版权许可',
    //prevPageLabel: '上一页',
    //nextPageLabel: '下一页',
    notFound: 
    {  //NotFound | undefined
      code: '>~<',
      title: '个页面出错了!',
      quote: 
      '至少现在,这个页面你是访问不了了.下次再来吧',
      linkLabel: '/',
      linkText: '回到首页吧',
    },


    collections: zhCollections,



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
         /**
         * 公告位置
         * @default 'top-right'
         */
        layout: 'top-right',//'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
      
        /**
         * 是否显示渐变边框
         *
         * @default true
         */
        border: false,
      
        /**
         * 在哪些页面显示公告
         *
         * - `true` 表示所有页面
         * - `false` 表示不显示
         * - 传入一个函数，返回 `true` 时显示
         */
        enablePage: true,  // | ((page: Page) => boolean)
      
        /**
         * 公告持续时间
         *
         * @default 'always'
         *
         * - `'session'` 表示在会话周期内关闭公告后不再显示，在新的会话周期重新显示，刷新页面不会重新显示
         * - `'always'` 表示总是显示，关闭公告后刷新页面会重新显示
         * - `'once'` 表示在仅在当前周期内显示，关闭公告后不再显示，新的会话和刷新页面都不会重新显示
         */
        lifetime: 'session',//'session' | 'always' | 'once'
      
        /**
         * 公告 ID
         *
         * 公告持续时间 需要根据 `id` 作为唯一标识
         */
        id: '1',
      
        /**
         * 公告标题
         */
        title: '公告',
      
        /**
         * 公告内容
         *
         * 可以使用 markdown 语法 或者 使用 html 文本，
         * 使用 markdown 时需要声明 `contentType` 为 `markdown`
         */
        content: '',
      
        /**
         * 公告内容 类型
         *
         * - `markdown` 表示使用 markdown 语法
         * - `text` 表示使用 普通文本 （可以是 html 内容）
         *
         * @default 'text'
         */
        contentType: 'markdown', // 'markdown'或'text'
      
        /**
         * 传入一个 `markdown` 或 `html` 文件路径，并使用文件内容作为公告内容
         *
         * - 使用 `.md` 文件时，将会解析 markdown 语法
         * - 使用 `.html` 文件时，只能包含公告内容，请不要使用 `<html>` `<body>` `<script>` 等标签。
         */
        contentFile: 'string',
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



    /**
   * 加密功能
   * @see https://theme-plume.vuejs.press/guide/features/encryption/
   */
   encrypt: {
      //global: false,
      admin: ['Fuyun13579'],
      rules: {
        '/其他/杂物/班级相关/': '2400',
        //'/其他/杂物/班级相关/ ':"2400",
        // 可以是 md 文件的相对路径，对该文件加密
        // '前端/基础.md': '123456',

        // 可以是 文件夹的路径，对该目录下所有文章加密
        // '/notes/vuepress-theme-plume/': '123456',

        // 可以是 访问地址的请求路径，对该访问路径下所有文章加密
        // '/vuepress-theme-plume/': '123456',

        // 可以是 具体的某个页面的请求路径，对该页面加密
        // '/article/f8dnci3/': '123456',

        // 如果是 `^` 开头，则匹配该正则表达式的页面也会加密
        // '^/(a|b)/': '123456',

        encryptGlobalText: '站点还没改完，你还不能看', //全站加密提示
        encryptPageText: '哦，这不是你能看的，请输入密码', //部分加密提示
        encryptButtonText: '我就要看', //加密按钮文本
      }
    },
})
