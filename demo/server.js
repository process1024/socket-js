var ws = require('nodejs-websocket');
ws.createServer(function(socket){
// 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
    socket.on('text', function(obj) {
        let {cmd, data} = JSON.parse(obj)
        socket.sendText(JSON.stringify({
            cmd,
            payload: {
                msg: `I accept the event ${cmd} and the data ${data}`
            }
        }))
    });
}).listen(3000, ()=> {
    console.log('服务启动成功')
}); 
