---
title: example
createTime: 2025/11/11 20:35:38
permalink: /blog/rsv0qwhg/
pageClass: page-wide
---
<h1 style="text-align: center;margin-bottom: 10px;">各科目作业</h1>

:::: details 关于本页面

::material-symbols:edit-note-outline-rounded =20px:: 作业可以通过修改桌面上的文件"Homework.md"来更改

==怎么更改?==:在各个科目的区域内,只要在三个冒号之内,都会显示.(点击查看示例) [+作业示例] ;(点击查看编辑事项) [+编辑事项].

::: center
如何==退出==? [+退出] (点击展开提示)
:::

*[Homework.md]: 如果你想的话
::::

::::: collapse

- 历史情况 ::pajamas:issue-type-requirements::

  :::: card
  ::: echarts 作业情况

  ```js
  const
    option = {
    // 此处为 ECharts 图表配置\
      xAxis: {
        data: ['', '一组', '二组', '三组', '四组', '五组', '六组', '七组']
      },
      yAxis: {},
      series: [
        {
          data: [8, 8, 8, 8, 8, 8, 8, 8],
          type: 'bar',
          stack: 'x'
        },
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0],
          type: 'bar',
          stack: 'x'
        }
      ]
    }
  ```

  :::
  ::::

  :::: card
  ::: timeline horizontal placement="left"

  - 标题
    time=2025-9-21

    正文

  :::
  ::::

- 每日一题 11-11

  **加粗 question**

  answer

:::::

:::::: card-masonry gap="16" cols="3"

::::: card title="语文" icon="pajamas:highlight"

1. **语文作业 1**
2. **语文作业 2**

:::::

::::: card title="数学" icon="pajamas:formula "

1. **向后预习课程, ==建议预习3.1.2=={.danger}**
2. **解题觉醒完成==第二章,3.1.1=={.tip}**
3. **==戴圣壹==准备==每日一题=={.danger}**

:::::

::::: card
:::: collapse accordion

- 内务

  ::: table hl-cells="danger:(4,2),(5,2),(7,2)"

  | 内务 |  一  |  二  |  三  |  四  |  五  |  六  |
  | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
  | 317  |      |      |      |      |      |      |
  | 318  |      |      |      |      |      |      |
  | 319  |      |      |      |      |      |      |
  | 320  |      |      |      |      |      |      |
  | 319  |      |      |      |      |      |      |
  | 320  |      |      |      |      |      |      |

  :::
:::::

::::: card title="英语" icon="material-symbols:book-6-outline-rounded"

1. **英语作业 1**
2. **英语作业 2**

:::::

::::: card title="物理" icon="pajamas:rocket-launch"

1. **物理作业 1**
2. **物理作业 2**

:::::

::::: card title="化学" icon="pajamas:issue-type-test-case"

1. **学法==写完67页==,课时写完==电离常数=={.important}**

:::::

::::: card title="生物" icon="pajamas:nature"

1. **写完==选修二学法P42=={.tip}**

:::::

::::: card title="政治" icon="ri:book-shelf-fill"

1. **==政治作业==**

:::::

::::::

[+作业示例]:
   以语文为例子:

   ```
   ::: card title="语文" icon="pajamas:highlight"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以数学为例子:

   ```
   ::: card title="数学" icon="pajamas:formula"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以英语为例子:

   ```
   ::: card title="英语" icon="material-symbols:book-6-outline-rounded"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以物理为例子:

   ```
   ::: card title="物理" icon="pajamas:rocket-launch"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以化学为例子:

   ```
   ::: card title="化学" icon="pajamas:issue-type-test-case"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以生物为例子:

   ```
   ::: card title="生物" icon="pajamas:nature"
   在这里填写作业内容
   :::
   ```

[+作业示例]:
   以政治为例子:

   ```
   ::: card title="政治" icon="pajamas:mail"
   在这里填写作业内容
   :::
   ```

[+编辑事项]:
   **编辑事项**

   在编辑时,不要轻易修改**冒号**`:::`那一行

   如果作业的字太小了,可以在前面加3个`#`和1个` `空格,就像这样:

[+编辑事项]:
   **文本格式：**

   **加粗:** 用`** **`把文本包裹起来

   <u>下划线:</u> 用`<u> </u>`把文本包裹起来

   ==马克笔高光:== 用`== ==`把文本包裹起来

[+退出]:
  作为 **网站** 页面,点击右上角==最小化==`-`即可

[+退出]:
  全屏状态下,鼠标移至==顶端==或==触控==从顶端 **滑下** ,显示标题栏,然后最小化

[+每日一题]:
   <ImageCard image="/image/Other/Homework.png"  width="350px"  />