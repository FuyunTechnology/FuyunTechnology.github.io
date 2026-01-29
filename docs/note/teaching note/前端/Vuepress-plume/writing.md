---
title: 文章示例
createTime: 2025/08/28 16:31:19
permalink: /note/teaching note/site/Vuepress-plume/writing/
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

- .git/
- **docs**  文档源目录
  - .vuepress   VuePress 配置目录
    - public/  静态资源
    - client.ts  客户端配置（可选）
    - collections.ts  Collections 配置（可选）
    - config.ts  VuePress 主配置
    - navbar.ts  导航栏配置（可选）
    - plume.config.ts  主题配置文件（可选）
  - Doc 文章文件夹 
    -... 文章
  - README.md  站点首页
  - … 其他文章文件夹
- package.json
- pnpm-lock.yaml
- .gitignore
- README.md

:::

文件夹的==性质==由[集合](https://theme-plume.vuejs.press/guide/collection/)的配置来决定.
你可以在`collections.ts`,`config.ts`,`plume.config.ts`里配制参数
::: warning 三个文件配置不要交叉! 尽量只用一个文件
:::

### Frontmatter:

Frontmatter用于对文章的配置,作用于整个文章页面.在打开了Vuepress的本地预览服务后,会对站点下的Markdown文件自动填写==一定==的配置[+Front示例]

[+Front示例]:
  比如该文章的标题,创建时间和永久链接.

  这些配置都可以在config.ts文件里配置

首先,Frontmatter需要写在==文章顶端=={.danger},用以下格式把配置包裹起来

```
---

# 在此处填写配置

---
```

然后把配置加进去.而在==Vuepress-plume==里面,大概有这些配置