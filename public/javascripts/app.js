
const express = require('express');
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
