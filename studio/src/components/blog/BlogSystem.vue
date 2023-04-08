<template>
  <h2 v-if="h2hidden">你的用户名: {{ inpuvalue.name }}</h2>
  <div v-html="htmlstr" style="height: 300px;width:400px;display: flex; flex-direction:column-reverse; overflow: scroll; margin: 0 auto;border:  1px solid black;"></div>
  <input type="text" v-model="inpuvalue.name" v-if="hidden">
  <input type="text" v-model="inpuvalue.message">
  <button @click="sendMessage"> send </button>
</template>

<script>
export default {
  name: 'BlogSystem',
  data() {
    return {
      ws: {},
      message: 'blog',
      inpuvalue: {
        name: 'yuanda',
        message: '进入聊天室'
      },
      hidden: true,
      h2hidden: false,
      htmlstr: ''
    }
  },
  mounted() {
    // this.ws = new WebSocket('ws://192.168.57.67:3000')
    // this.ws.onmessage = this.getMessage
  },
  methods: {
    sendMessage() {
      this.ws.send(JSON.stringify(this.inpuvalue))
      this.inpuvalue.message = ''
      this.hidden = false
      this.h2hidden = true
    },
    getMessage(msg) {
      this.message = msg.data
      this.htmlstr = '<p style="margin: 2px;">'+ this.message + '</p>' + this.htmlstr
      console.log(this.htmlstr)
    }
  }
}
</script>



<style scoped>
</style>