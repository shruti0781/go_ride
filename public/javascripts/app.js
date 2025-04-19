const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const server = http.createServer(app);
const io = socketio(server);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
io.on("connection", function(socket){
  socket.on("sendlocation", function(data){
    io.emit("sendlocation", {id: socket.id, data: data});
  })
  socket.on("disconnect", function(){
    io.emit("sendlocation", {id: socket.id, data: null});
  })
  console.log("connected");
  socket.on("disconnect", function(){
    console.log("disconnected");
  });
})
app.get("/", function(req, res){
res.render("index.ejs");
});

server.listen(3000);