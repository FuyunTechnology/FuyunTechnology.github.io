<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const utterScript = document.createElement('script')
  utterScript.src = 'https://utteranc.es/client.js'
  utterScript.async = true
  utterScript.crossOrigin = 'anonymous'
  
  // 需替换为你的 GitHub 仓库配置
  utterScript.setAttribute('repo', 'FuyunTechnology/FuyunTechnology.github.io') // 例如：YunYouJun/valaxy
  utterScript.setAttribute('issue-term', 'pathname') // 按文章路径关联 Issue
  utterScript.setAttribute('label', 'utterances')    // 评论标签
  utterScript.setAttribute('theme', 'github-light')  // 主题（可选 github-dark/light）

  // 挂载到 Valaxy 的评论容器（默认选择器为 .comment）
  const commentContainer = document.querySelector('.comment')
  if (commentContainer) commentContainer.appendChild(utterScript)
})
</script>

<template>
  <!-- 保留空模板 -->
  <div />
</template>