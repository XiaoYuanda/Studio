<template>
  <div>
    <h1>{{ msgData.room.data }}</h1>
    地址<input type="text" v-model="ipAndPort" @change="this.changIP()">
    房间<input type="text" v-model="msgData.room" @change="this.changRoom()">
  </div>

  <div>
    <h2>1.可视化 websocket 数据传输</h2>
    <canvas id="canvas"></canvas>
  </div>
  <div>
    <h2>2.实时在线编辑协同办公原理</h2>
    <el-input :autosize="{ minRows: 15 }" style="max-width: 820px;" type="textarea" @input="textSendFunction"
      v-model="textData" />
  </div>
  <!-- <button @click="send">send</button> -->
  <div style="height: 100px"></div>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  name: 'MyProject',
  data() {
    return {
      socket: {},
      canvas: {},
      roomMsg: undefined,
      msgData: {
        room: 'room',
        data: {
          x: 100,
          y: 200
        }
      },
      timer: null,
      textData: '',
      timeOut: null,
      ipAndPort: 'http://192.168.162.67:3000'
    }

  },
  mounted() {
    this.wsConnect()
    this.canvas.c = document.getElementById('canvas')
    this.canvas.c.addEventListener('mousemove', this.mousemove)
    this.canvas.ctx = this.canvas.c.getContext('2d')
    this.canvas.c.width = 820
    this.canvas.c.height = 300
  },
  methods: {
    changRoom() {
      this.socket.disconnect()
      window.localStorage.setItem('room', this.msgData.room)
      this.wsConnect()
    },
    changIP() {
      this.socket.disconnect()
      window.localStorage.setItem('ipAndPort', this.ipAndPort)
      this.wsConnect()
    },
    wsConnect() {
      // 检查是否有本地存储的ipAndPort
      var ip = window.localStorage.getItem('ipAndPort')
      if (ip) {
        this.ipAndPort = ip
      }
      var room = window.localStorage.getItem('room')
      if (ip) {
        this.msgData.room = room
      }

      window.localStorage.setItem('ipAndPort', this.ipAndPort)
      this.socket = io(this.ipAndPort, {
        auth: {
          offset: undefined,
          room: this.msgData.room
        }
      })
      this.socket.on("connect", () => {
        console.log('会话连接成功，id：' + this.socket.id)
      });
      this.socket.on("msg", ({ id, data }) => {
        // do something with the data, and then update the offset
        this.socket.auth.offset = id;
        console.log('getMsg', data)
      });
      this.socket.on('roomMsg', this.getRoomMsge)
      this.socket.on('gettextData', this.getTextData)
    },
    send() {
      // console.log('send')
      this.socket.emit('roomMsg', this.msgData)
    },

    timerfunction() {
      this.send()
      this.timer = null
    },
    getRoomMsge(msg) {
      // 收到消息就绘画
      // clearRect
      this.canvas.ctx.clearRect(0, 0, this.canvas.c.width, this.canvas.c.height)

      this.canvas.ctx.beginPath()
      this.canvas.ctx.fillStyle = '#000'

      this.canvas.ctx.arc(msg.data.x, msg.data.y, 10, 0, Math.PI * 2)
      this.canvas.ctx.fill()
      this.canvas.ctx.closePath()

    },
    mousemove(e) {

      // console.log(e.clientX)
      var x = e.clientX;
      var y = e.clientY;

      var rect = this.canvas.c.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;

      this.msgData.data.x = x
      this.msgData.data.y = y

      this.canvas.ctx.clearRect(0, 0, this.canvas.c.width, this.canvas.c.height)

      this.canvas.ctx.beginPath()
      this.canvas.ctx.fillStyle = '#000'

      this.canvas.ctx.arc(x, y, 10, 0, Math.PI * 2)
      this.canvas.ctx.fill()
      this.canvas.ctx.closePath()

      // 这里要做节流，否则发送事件太多
      if (this.timer) {
        return
      }
      this.timer = setTimeout(this.timerfunction, 10)


    },
    textSendFunction() {
      this.socket.emit('textData', this.textData)
    },
    getTextData(msg) {
      this.textData = msg
    }
  }
}
</script>

<style scoped>
#canvas {
  border-radius: 20px;
  border: 1px solid #eee;
}
</style>