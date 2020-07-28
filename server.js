const express = require('express');
const app = express();

var contador=1;

app.use(express.static(__dirname + '/public/'));

app.get('/prova/',function(req,res){
        res.send('Hi world!');
        console.log('somebody ' + contador);
        contador++;
});

app.listen('3000', function() {
  console.log('Servidor web port 3000');
});
