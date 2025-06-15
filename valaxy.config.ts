import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonComponents } from 'valaxy-addon-components'
import { addonFace } from 'valaxy-addon-face'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '浮芸的云端',
    },

        bg_image: {
      enable: true,
      url: 'https://bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/blob/main/image/site/White-background.png',
      dark: 'https://bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/blob/main/image/site/black-background.png',
      opacity: 0.7
    },

     colors: {
      primary: '#4B9BE1'
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的艺术家',
        url: '/Artist/',
        icon: 'i-line-md-cookie-filled',
        color: 'hotpink',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-ri-gallery-line',
        color: '#43abee',
      },
    ],

	footer: {  //脚注
      since: 2025,  //网站运行时间
      icon: {
        enable: true,  //是否启用
        name: 'i-line-md-cloud-alt-print-filled-loop',
        animated: true,
        color: '#d69b54',
        url: 'https://fuyuntechnology.github.io/',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
      beian: {
        enable: true,
        icp: '备案号:xxxx 真的备案了吗',	// 备案
      },
    },
  },
 
 addons: [
    addonLightGallery(),   //导入相册插件
    addonComponents(),  //导入通用组件
    addonFace({  //导入表情包插件
      // 配置
      defaultSuffix: 'png'
    }),
    // 如果不配置:'valaxy-addon-face'
  ],
  
   markdown: {
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },

    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
        langs: {
          'zh-CN': 'Tip:小提示',
        },
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: 'warming:请注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: 'caution:危险警告',
      },
      info: {
        text: 'información',
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
