
<template>
  <div>
    <p>
    你好，欢迎来我的个人网站，在这里你可以查看我做过的项目，我写的博客和我的收藏。本人计算机应用技术专业，热衷于网页开发，现在专注基于 Vue 3 框架的 Web 前端开发。
    </p>

    <p>
    我享受编程带给我的乐趣以及渴望精进自己的编程技术，以写代码为乐趣，探寻先进主流的技术，掌握一定程度 HTML + CSS 技能 和 JavaScript，在日常中我主要使用的是 vue 3 框架进行开发，使用 Vue  做 SPA 单页面应用，使用 Element plus UI 框架做页面布局与优化，使用 Asiox 进行 API 调用等，你可以在项目界面查看我开发过的项目，同时，我已将我的项目文件在 GitHub 上开源，欢迎 Star 和 Subscribe。
    </p>
    <p>
    在工作和学习之余，我喜欢在我的微信公众号上写写文档，微信公众号：xiaoYuanda2021
    </p>
    <h3>个人技能</h3>
    <el-row>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" size="small" effect="light" type="info">{{ item.label }}</el-tag>
  </el-row>
    <p>Find me on GitHub and WeChat or Mail me at xiaoyuanda@aliyun.com</p>
    <p class="mail">
      xiaoyuanda@aliyun.com
    </p>
  </div>
</template>

<script>
export default {
  name: 'DescribeMe',
  data() {
    return {
      items: [
        { label: 'PPT' },
        { label: 'Excel' },
        { label: 'Word' },
        { label: 'Photoshop' },
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'Vue.js' },
        { label: 'Web Socket' },
        { label: 'Web Stroe' },
        { label: 'WebGL' },
        { label: 'Canvas' },
        { label: 'Svg' },
        { label: 'Shell' },
        { label: 'Linux' },
        { label: 'Cmd' },
        { label: 'Node.js' },
        { label: 'Asiox' },
        { label: 'Element UI' },
        { label: 'Redis' },
        { label: 'Mysql' },
        { label: 'Other' }
      ]
    }
  }
}
</script>

<style scoped>
div {
  padding: 0;
  width: 800px;
  text-align:left;
  /* background-color: #eee; */
}
p {
  color: #555;
  line-height:30px;
  padding: 0;
}
.el-tag--small {
  margin-right: 15px;
  margin-bottom: 10px;
}
.mail {
  text-align: right;
  color: #aaa;
}
</style>