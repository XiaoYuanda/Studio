<template>
  <div id="avator">
    <img src="../../assets/avator.jpg" alt="">
    <ul>
      
      <li>
        这是一段简介，一段描述自己的文字
      </li>
      <li>
        <p>XiaoYuanda</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AvatorInof'
}
</script>
<style scoped>
#avator {
  display: flex;
  overflow: hidden;
  /* background-color: #eee; */
  padding: 20px;
  width: 800px;
  height: 100px;
  min-width: 800px;
  justify-content: left;
}
img {
  height: 100px;
  width: 100px;
  border-radius: 20px;
}
ul {
 margin: 0; 
 padding: 10px 25px;
 display: flex;
 flex-direction: column-reverse;
 text-align: start;
}

ul li p {
  font-size:xx-large;
  font-weight: 800;
  margin: 0;
  padding: 0;
}
</style>