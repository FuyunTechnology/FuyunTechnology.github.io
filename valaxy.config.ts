import type { UserThemeConfig } from 'valaxy-theme-yun'  //引入主题yun
import { defineValaxyConfig } from 'valaxy'  
import { addonComponents } from 'valaxy-addon-components'  //引入插件通用插件
import { addonFace } from 'valaxy-addon-face'  //引入表情包插件

// add icons what you will need
const safelist = [
  'i-line-md-home',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',  //主题名字

  themeConfig: {  //主题配置,在这里修改
    banner: {
      enable: true,
      title: '星海坠入云端',   //在这里填写你的站点名字
    },

        bg_image: {  //网站的背景图片,粘贴链接
      enable: true,
      url: 'https://raw.bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/refs/heads/main/image/site/White-background.png',  //亮色模式背景图片
      dark: 'https://raw.bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/refs/heads/main/image/site/black-background.png',  //暗色模式背景图片
      opacity: 0.7
    },

     colors: {
      primary: '#4B9BE1'  //网站的主题色,用16进制代码

    },

    pages: [  //在这里添加你的界面
      //仿照一下格式添加
      /*{
       *name: '页面名字',
       *url: '/页面链接/',
       *icon: '图标',
       *color: '图标颜色',
       *},
       */
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-line-md-emoji-smile-wink',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的艺术家',
        url: '/Artist/',
        icon: 'i-line-md-heart-filled',
        color: 'hotpink',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-line-md-image-filled',
        color: '#43abee',
      },
    ],

	footer: {  //脚注
      since: 2025,  //网站运行时间
      icon: {
        enable: true,  //是否启用
        name: 'line-md:sun-rising-filled-loop',  //图标名字
        animated: true,  //是否启用
        color: '#d69b54',  //图标颜色
        url: 'https://fuyuntechnology.github.io/',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
      beian: {  //备案
        enable: true,  //是否启用
        icp: '备案号:xxxx 真的备案了吗',	// 备案信息
      },
    },
  },
 
 addons: [
    addonComponents(),  //导入通用组件
    addonFace({  //导入表情包插件
      // 配置
      defaultSuffix: 'png'
    }),
    // 如果不配置:'valaxy-addon-face'
  ],
  
   markdown: {  //markdown扩展警示框
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },

    blocks: {
      tip: {  //名字
        icon: 'i-line-md-compass-loop',  //图标
        text: 'Tip:小提示',  //文字
        langs: {  //语言
          'zh-CN': 'Tip:小提示',
        },
      },
      warning: {
        icon: 'i-line-md-bell-alert-twotone-loop',
        text: 'warming:请注意',
      },
      danger: {
        icon: 'i-line-md-hazard-lights-loop',
        text: 'caution:危险警告',
      },
      info: {
        icon:'line-md:cloud-alt-print-filled-loop',
        text: 'información:更多信息',
      },
    },

    codeTransformers: [
      // We use `[!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
    ],

    config(md) {
      // md.use(xxx)
    }
  },
  
  unocss: { safelist },
})
