<!-- 
  这是一个简易的顶部导航栏组件，主要是在App页面上使用
  组件名称，HomeNavBar 
-->
<template>
  <div id="navbar">
    <router-link to="/">
      <img src="../../assets/YuandaStudio.png" alt="图标">
    </router-link>
    <ul>
      <li>
        <router-link to="/">博客</router-link>
      </li>
      <li>
        <router-link to="/favorite">收藏</router-link>
      </li>
      <li>
        <router-link to="/project">项目</router-link>
      </li>
      <li>
        <router-link to="/about">Me</router-link>
      </li>
      <li>
        <a href="https://github.com/XiaoYuanda">
          github
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNavBar',
  data() {
    return {
      msg: '这是页面导航栏'
    }
  }
  
}
</script>

<style scoped>
#navbar {
  overflow: hidden;
  height: 50px;
  padding: 30px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navbar img {
  height: 40px;
  width: 80px;
  padding: 0;
  margin: 0;
}

#navbar img:hover{
  border-radius: 5px;
}
ul li a {
  display: block;
  height: 40px;
  width: 70px;
  line-height: 40px;
  color: #333;
  text-decoration: none;
}
#navbar a:hover{
  border-radius: 5px;

}
ul {
  display: flex;
  justify-content: space-between;
}
</style>