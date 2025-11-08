---
title: 文章示例
createTime: 2025/08/28 16:31:19
permalink: /notes/指导笔记/文章示例.html
pagelayout: doc
---

::: center
## 引子
:::

在完成网站的设计,部署和修改后就要开始写文章了

对于文章和文档,在Vuepress的[Plume](https://theme-plume.vuejs.press/)主题里,写文章有以下事项要==注意==

::: center
## 正文
:::

### 理清目录结构:

在==plume==主题里面,会出现以下目录结构

::: file-tree  icon="colored"

- docs
  - .vuepress  Vuepress的配置文件夹
    - config.ts  站点的配置文件,不支持热更新
    - plume.config.ts  主题的配置文件,支持热更新,建议更改这个
    - navbar.ts  导航栏的配置文件
    - notes.ts  笔记配置,用于声明笔记文章
    - cilent.ts  配置,可能与主题有关
  - notes  笔记目录,该目录下文件将默认作为笔记
    - README.md
    - ...
  - 其他文件夹  将作为博客文章显示
    - README.md
  - README.md  README文件将作为该页面首页展示
  - ...  其他自己加的文件夹

:::

==notes=={.important}下的文件夹默认为笔记,不会在博客文章页显示,也就不会在归档/分类/标签内显示

==其他文件夹=={.tip}则会默认作为博客文章目录,并在分类中按文件夹排序

### Frontmatter:

Frontmatter用于对文章的配置,作用于整个文章页面.在打开了Vuepress的本地预览服务后,会对站点下的Markdown文件自动填写==一定==的配置[+Front示例]

[+Front示例]:
  比如该文章的标题,创建时间和永久链接.

  这些配置都可以在config.ts文件里配置

首先,Frontmatter需要写在==文章顶端=={.danger},用以下格式把配置包裹起来

```
---

// 在此处填写配置

---
```

然后把配置加进去.而在==Vuepress-plume==里面,大概有这些配置