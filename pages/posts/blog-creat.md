---
layout: post
title: 关于个人搭建静态博客站点的经验与各种坑 （Valaxy篇）
date: 2025-06-15 14:35:43
comment: true
titleTemplate: '%s-你真的学会了吗?😐'
categories: 博客教程
tags:
  - valaxy
---

[[toc]]

# 引子:

 有些人可能会很好奇，站长站长，请问这个站点是你怎样搭建起来的呀？” 那么这篇文章对你可就大有帮助了，不用担心你会不会听懂，这你就尽管放心。 这篇文章主要是面向小白的（真的，零编程基础的小白也会），当然，大佬过来观摩也可以指出一些问题。由于站长在搭建时，没有任何编程基础，再加上没时间， 前前后后折腾了近三周，才把网站挂上来（没作任何修改）、所以，这篇文档会写 得很详细，包教包会！



##  Valaxy 简介：

 Valaxy是由云游君开发的新一代博客框架，吸引我的一点是它简洁美观的主 题。虽然现在主题并不多，但我相信，以后会有越来越多的主题的（你们加油！）

 

# 准备材料:

 在本地布署前，请先准备以下工具软件：Git， Visual Studio code，Node.js 

::: details 小白看过来：
>**Git:**Git是一款命令提示符工具，你要在里面输入指令完成某些操作
> 
>**Visual studio code：**它是一款编辑代码的专业软件，建议人手一个.
> 
>**Node.js：**这个站长也不太懂，但框架的运行需要他。 
> 
>**关于安装：**
> 
>在安装它们时，请不要调试，同意协议，选默大认选项一直下一步就行了。
> 
>**Visual studio code纯英文，看不懂咋办:**
> 
>打开它，在左侧侧栏找到扩展图标 （第5个）打开，在那个页面搜Chinese（Simply），安装插件，并同意右下角的 语言更改提示.这样，就是中文界面啦。

:::

## 开始搭建:

1.  在你的电脑里随便找个地方，建一个文件夹（不容易删掉的地方,注意此文件夹存放的路径不要有中文和空格），从此这就是你网站本地部署的地方啦。（不要选U盘和移动硬盘，会报错的！） 
2. 在这里打开命令提示符，即CMD（你只要在上方地址空白处点一下，输cmd搜索即可(要在资源管理器里打开)
3. 在这里敲入你的第一串指令吧：

安装依赖pnpm:

```cmd/powershell
npm i -g pnpm
```

创建valaxy项目:

```cmd/powershell
cmd/power shellpnpm create valaxy
```

在第二串指令打出后,会提示选择代理,这里需要使用上下箭头选中,`Enter`选择.这里我们选择`pnpm`代理,会快一点.

之后,会提示命名文件夹,你可以随便取名,不要有中文和空格.随后,你要命名**包名**,建议直接使用默认名

最后,他会提示是否现在安装,这里我们直接按`Y`即可开始安装

等命令窗口输出完后,会自动执行预览命令

 这样,网站的本地部署就完成啦，是不是很简单？ 现在就可以开始你的编辑之路了。

- 你可以在这个窗口按`O`打开浏览器,预览你在本地搭建的网站，嗯是不是很快呢？
- 要对这个网站进行修改,可以在窗口内按`E`,通过修改网站的本地文件来修改。 

::: info

对网站的本地修改要先关掉运行预览指令的CMD窗口(创建项目后会自动运行预览指令),可以按`ctrl`+`C`直接结束预览服务（使用VS code则是结束任务，这个方法后面会提到），再运行遍预览指令才会应用哈，指令见下文。 

:::

## 其它常用指令： 

站点的预览命令:

```cmd/powershell
pnpm dev
```

升级命令（按空格选择，按上下键切换，按 A 全选，按回车开始更新）：

```cmd/powershell
pnpm up --latest -i
```

如果出现了一些bug，可以考虑删除 node_modules 文件夹，再使用以下命令重新安装依赖：

```cmd/powershell
pnpm install
```



# Valaxy站点的编辑与自定义个性化:

一下子就到重头戏之一—代码编辑了呢，以下内容请边服用凉水观看，以防烧脑，嗯最好再敷用冰袋，效果更佳。那么，好戏开场喽。 

## 关于博客文件夹下的文件：