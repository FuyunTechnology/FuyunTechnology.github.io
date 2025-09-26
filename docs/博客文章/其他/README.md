---
title: 导航
createTime: 2025/08/23 12:40:34
permalink: /博客文章/其他/导航.html
---

:::::: collapse

- 历史情况
  
  <CardGrid>
  <Card>

  ::: echarts 作业情况
  
  ```js
  const
    option = {
    // 此处为 ECharts 图表配置\
      xAxis: {
      type: 'category',
      data: ['一组', '二组', '三组', '四组', '五租', '六组', '七组']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [6, 8, 7, 2, 5, 5, 5],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(167, 208, 249, 0.42)'
        }
      }
    ]
  }
  ```
  :::
  
  </Card>
  
  </CardGrid>