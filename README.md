
# socket

基于原生websocket，可以监听与发送服务端约定好的所有事件。


## 安装(yarn or npm)

```bash
$ yarn add cjy-socket
```

## 使用方法 (vue为例)

```javascript
import Socket from 'cjy-socket';

const socket = new Scoket('localhost:3000') // 参数为具体的socket地址

socket.initSocket()

Vue.prototype.$socket = socket

```

```vue
<template>
    <button @click="sendMsg">{{ count }}</button>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
        this.$socket.addListener('event1', data=> { // 监听具体某个事件
            console.log(data)
        }
        this.$socket.listenAll(data => { // 监听具体所有事件
            console.log(data)
        })
    },
    methods: {
        sendMsg () {
            this.$socket.sendSocketMessage({ // 发送socket消息
                msg: 'hello, socket'
            })
        }
    },
    destoryed () {
        this.$socket.removeListener('event1') //移除监听的某个事件 
        this.$socket.removeAllListener() //移除监听的所有事件
        this.$socket.closeSocket() //断开socket连接
    }
}
</script>
```



## API
事件名 | 说明 | 参数 |
  -------------------| -------------------------|----|
 sendSocketMessage | 发送socket消息 | Object {cmd: 'event', msg: 'hello,socket'} |
 addListener | 监听具体某个消息事件 | event,callback(data) |
 listenAll | 监听所有消息事件 | callback(data) |
 removeListener | 移除监听的某个事件 | 	event |
 removeAllListener | 移除监听的所有事件
 closeSocket | 断开socket连接
