<template>
  <HomeNavBar activeitem="blog"></HomeNavBar>
  <h1>这个页面是主要页面</h1>
  
</template>

<script>
import HomeNavBar from './components/Home/HomeNavBar.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HomeStudio from './components/HomeStudio.vue'

export default {
  name: 'App',
  components: {
    HomeNavBar
    // HelloWorld,
    // HomeStudio,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  margin: 0;
}
</style>
