const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var contador=1;

app.use(express.static(__dirname + '/public/'));

app.get('/prova/',function(req,res){
        res.send('Hi world!');
        console.log('somebody ' + contador);
        contador++;
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log("rebem el missatge");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

app.listen('3000', function() {
  console.log('Servidor web port 3000');
});
