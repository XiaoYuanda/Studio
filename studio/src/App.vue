<template>
  <HomeNavBar></HomeNavBar>
  <RouterView></RouterView>
</template>

<script>
import HomeNavBar from './components/home/HomeNavBar'

export default {
  name: 'App',
  components: {
    HomeNavBar
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
li {
  display: inline;
  list-style: none;
  overflow: hidden;
}
</style>
