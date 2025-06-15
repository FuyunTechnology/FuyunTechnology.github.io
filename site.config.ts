import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '星海之上',
  subtitle: 'Roof above the sea star',
  author: {
    name: '仰望星空',
    avatar: "https://raw.bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/refs/heads/main/image/site/Avatar.png",
     status:
    {
      emoji: '💡',
      message: '我有一计!'
  }
  },
  description: '编辑博客还是太难了',
  favicon: 'https://raw.bgithub.xyz/FuyunTechnology/FuyunTechnology.github.io/refs/heads/main/image/site/Site%20Icon.png',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-line-md-rss',
      color: 'orange',
    },
    /**
   * 按以下格式添加社媒方式
    {
      name: '媒体和图标名称',
      link: '图标链接',
      icon: '图标名字',
      color: '图标颜色,请使用16进制格式',
    },
   */
    {
      name: 'QQ  3404889047',
      link: '',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/FuyunTechnology',
      icon: 'i-line-md-github',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/elpsycn',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail(暂时还没有合适的)',
      link: '',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

    search: {  //是否启用搜索
    enable: false,  //ture或false
    type: 'engine',  //engine或aligoge
  },

  encrypt: {
    // 开启加密，默认关闭
    enable: true
    // algorithm
    // iv
    // salt
  },

mediumZoom: { enable: true },  //开启图片预览

  /**
   * 开启阅读统计
   */
  statistics: {  //显示阅读信息
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {
    enable: false,
    title: '看在收集了这么多软件的份上,给点钱吧',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
