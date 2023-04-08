<template>
  <div id="avator">
    <img src="../../assets/avator.jpg" alt="">
    <ul>
      
      <li style="color:#555">
        Front-End Developer / Tianhe / Guangzhou
      </li>
      <li><a @click="this.changeName()">
        <p>{{ name }}</p>
      </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AvatorInof',
  data() {
    return {
      name: 'XiaoYuanda',
      flag : true
    }
  },
  methods: {
    changeName(){
      if(this.flag) {
        this.name = '肖远大'
        this.flag = false 
      } else {
        this.name = 'XiaoYuanda'
        this.flag = true
      }
    }
  }
}
</script>
<style scoped>
#avator {
  display: flex;
  overflow: hidden;
  /* width: 800px; */
  max-height: 100px;
  max-width: 820px;
  justify-content: left;
}
img {
  width:23%;
  height: 23%;
  max-width: 100px;
  max-height: 100px;
  border-radius: 20px;
}
ul {
 margin: 0; 
 padding-left: 10px;
 display: flex;
 flex-direction: column-reverse;
 text-align: start;
}

ul li p {
  font-size:x-large;
  font-weight: 800;
  margin: 0;
  padding: 0;
}
</style>