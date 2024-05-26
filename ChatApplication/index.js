const  {Server} =require("socket.io");
const server =new Server({cors:{origin:"http://localhost:4200"}});
server.on("connect",(socket)=>{

    console.log(`Connection id ${socket.id}`);
    socket.on("message",(data)=>{
        socket.broadcast.emit('recived',{data:data,message:"This is test message"});
    })
});
server.listen(4000);