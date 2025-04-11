const express= require('express');// require import karne keh liya kam attah hai.
const app= express();
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io= socketio(server);//calling the server
app.set("view engine","ejs");
app.set("express.static(path.join(__dirname,"public"));
app.get("\",function(req,res){
        res.send("hey");
});
app.listen(3000);
