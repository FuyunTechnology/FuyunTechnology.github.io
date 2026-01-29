---
title: 零基础搭建博客网站-Valaxy-配置篇
categories: 博客教程
tags:
  - valaxy
  - blog
codeHeightLimit: 300
createTime: 2025/09/01 07:15:01
permalink: /note/teaching note/site/Valaxy/settings/
outline: 'deep'
---
# Valaxy站点的编辑与自定义个性化:

一下子就到重头戏之一—代码编辑了呢，以下内容请边服用凉水观看，以防烧脑，嗯最好再敷用冰袋，效果更佳。那么，好戏开场喽。 

## 关于博客文件夹下的文件：

### 前言:

为了方便管理,Valaxy人性化地将大部分基础配置都放在了两个文件之下:`valaxy.config.ts`和`site.config.ts`.

在完成了本地部署的步骤之后,基本就只需要对这两个文件进行一些个性化的修改就行了

::::: details 10元懒人配置使用教程
:::: steps

1. 打开存放我博客站点文件的==github仓库==
   <RepoCard repo="Fuyunxinyu/Fuyunxinyu.github.io" />
2. 点击`code`(使用汉化插件则是`代码`),然后`Download zip`(使用汉化插件则是`下载压缩包`)

    ==下载速度慢请看这里=={.tip}[+镜像]

[+镜像]:
  点击此处跳转镜像网站:[镜像仓库](https://bgithub.xyz/Fuyunxinyu/fuyunxinyu.github.io)

3. 下载完之后再解压压缩包,解压到合适的地方.

    ::: danger
    路径不得含有中文等其他字符
    :::

4. 在文件夹下打开`cmd`,输入以下指令:

   安装依赖:
   ```powershell
   npm i -g pnpm
   ```
   
   安装包体:
   ```powershell
   pnpm istall
   ```
   
   安装插件:
   ::: code-tabs
   
   @tab 通用组件
   ```powershell
   pnpm add valaxy-addon-components
   ```
   
   @tab 相册组件
   ```powershell
   npm i valaxy-addon-lightgallery
   ```
   
   @tab 统计组件
   ```powershell
   pnpm add valaxy-addon-vercount
   ```
   :::

5. 打开文件`valaxy.config.ts`和`config.ts`,对照里面的注释,==自己进行修改==把
::::
:::::

### valaxy.config.ts:

#### 大体内容:

这个文件是Valaxy的主配置,里面包含了站点的主题配置,以及一部分功能配置(面向全局)

::: details 小白看过来:

**站长踩过的坑😭:**

- <u>引入代码:</u>

  在文件内容的最上端,会有这样一些代码:
  
  ```ts [valaxy.config.ts]
  import { ... } from '...'
  ```


  这些属于引入代码,在文件中引入其他东西,在别的大佬教程里,配置`valaxy.config.ts`的一部分代码都会有,这里由于文件自带了,所以站长就不写了.(但这些配置一定要有!)

- <u>注释代码:</u>

  在代码块中,你可能会看见这样的字符:

  ```ts [valaxy.config.ts]
  // 这是一串注释
  
  /**
  *这也是一串注释
  */
  ```

  其实,这都是注释,给你看的,能够方便你进行**修改**,一般注释写在内容上面.

  同样,为了方便理解,站长把**注释都写在代码后面了**

- 区域完整:

  如果你看见一个字符串后有`‘’`,`[]`,`{}`,`{( )}`…

  请一定要保证完全包裹住配置内容

  一般如果出现问题,VScode会提醒的,例如:

  > ```ts [valaxy.config.ts]
  > title: '星海坠入云端
  > ```
  >
  > 这里我少了`‘`,vscode提醒我:**“未终止的字符串字面量”**
  >
  > 即这一串配置没有终止,点击这一个消息就会跳转到问题所在的那一行,
  >
  > 我们只要在末尾加上`’`就行了
  >
  > 再如这样:
  >
  > ```ts [valaxy.config.ts]
  >     colors: {
  >       primary: '#4B9BE1'  //网站的主题色,用16进制代码
  >     }
  > ```
  >
  > 我在`}`后少了`,`,vscode提醒我:**应为“,”**
  >
  > 点击跳转到问题行,在那一行上面的花括号后添加`,`即可

:::

#### 具体配置:

根据文件,我会从上往下地讲述配置,你只需要找到对应代码的位置,并替换就行了

##### 主题名:

这里一般不用改,除非你使用了其他主题(默认主题为`Yun`)

@[code{16-17}](./code/valaxy.config.ts)

#### theme config:

##### 主题站点名(瞬时显示):

在这里把你的开始动画标题更改,默认为“云游君的小站”

@[code{21-24}](./code/valaxy.config.ts)

##### 站点的背景图片:

在这里粘贴图片链接,一定要指向源文件(后缀为图片后缀名)

@[code{26-33}](./code/valaxy.config.ts)

##### 站点主题色:

修改站点的主要配色,采用颜色名或16进制代码

@[code{70-73}](./code/valaxy.config.ts)

##### 站点的页面:

这里添加你站点的快捷页面链接,页面一般为导航倾向页面

@[code{35-68}](./code/valaxy.config.ts)

##### 站点的脚注:

在网站的末尾添加脚注内容,包括备案信息,自己修改吧

@[code{75-90} ts:no-collapsed-lines](./code/valaxy.config.ts)

##### Markdown警示框:

Valaxy默认不支持警示框写法,但通过添加以下代码可以实现.支持自定义

@[code{97-139}](./code/valaxy.config.ts)

#### 完整的示例文件如下:

@[code ts :collapsed-lines](./code/valaxy.config.ts)

### site.congfig.ts:(这里的配置主要与站点相关)

#### 站点默认语言:

这里就不多说了,基本不需要改

@[code{6-7}](./code/site.config.ts)

#### 站点标题(常驻):

在这里写上你的站点名字,比如我的站点名是“芸端之上”

@[code{9-10}](./code/site.config.ts)

#### 站点副标题:

显示在标题之下,字号略小

@[code{12-13}](./code/site.config.ts)

#### 站点描述:

在站点副标题之下,比他略大一点,起描述作用

@[code{15-16}](./code/site.config.ts)

#### 站点图标:

修改你站点的图标,显示在标签页上

@[code{18-19}](./code/site.config.ts)

#### author:(站长相关信息)

- name:站长名字

- avatar:站长头像

- status:站长状态相关

  - emoji:状态显示的emoji表情
  
  - message:鼠标悬停时显示的文字

  总代码(示例):

@[code{21-30}](./code/site.config.ts)

#### 社交媒体/联系方式:

  添加联系方式链接,常驻显示

@[code{32-78}](./code/site.config.ts)

#### 搜索:

这里的配置主要是与搜索相关,创建一个搜索索引,方便在站点内搜索文章

```ts
   search: {  //搜索相关
    enable: true,  //启用搜索
    type: 'Local',  //搜索样式,有 "engine" "algolia" "fuse",选填一个
    },
```

::: details 使用fuse作为引擎(不推荐新手使用😑)
@[code{80-103}](./code/site.config.ts)
:::

#### 时间警告:
在Valaxy中,这一项配制用于在文章的时间跨度大时使用,为文章自动添加时间警告,提醒读者
@[code{105-109}](./code/site.config.ts)

#### 加密:
Valaxy拥有对文章加密的功能,不过需要谨慎使用,不要把重要数据对此进行加密
@[code{111-117}](./code/site.config.ts)

#### 图片预览:
是否启用图片预览功能
@[code{119-120}](./code/site.config.ts)

#### 阅读统计:
用于在文章开头统计文章字数并计算阅读时长
@[code{122-136}](./code/site.config.ts)

#### 赞助:
在文章末显示赞助按钮,全局配置,会被文章配置覆盖
@[code{138-170}](./code/site.config.ts)

#### 完整的示例文件如下
@[code](./code/site.config.ts)

# 尾声

到此,Valaxy的配置项也说得差不多了,下一步,就是进行==站点部署=={.tip}了