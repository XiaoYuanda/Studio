<template>
  <div id="navbar">
    <img src="../../assets/YuandaStudio.png" alt="">
    <ul>
      <li>
        <a href="">博客</a>
      </li>
      <li>
        <a href="">收藏</a>
      </li>
      <li>
        <a href="">项目</a>
      </li>
      <li>
        <a href="">Me</a>
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
  /* background-color: #eeeeee; */
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
#navbar ul li {
  display: inline;
}
#navbar img:hover{
  border-radius: 5px;
  box-shadow: 1px 1px 5px 5px #eee;
}
#navbar a {
  display: block;
  height: 40px;
  width: 70px;
  line-height: 40px;
  /* background-color: gray; */
  color: #333;
  text-decoration: none;
}
#navbar a:hover{
  border-radius: 5px;
  background-color: #eee;

}
ul li {
  list-style: none;
  overflow: hidden;
}
ul, li {
  padding: 0;
}
ul {
  display: flex;
  justify-content: space-between;
}
</style>