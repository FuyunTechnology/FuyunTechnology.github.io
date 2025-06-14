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
      url: '/photo/bg/atri.webp',
      dark: '/photo/bg/bg.webp',
      opacity: 0.7
    },

     colors: {
      primary: '#39c5bb'
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
  
  unocss: { safelist },
})
