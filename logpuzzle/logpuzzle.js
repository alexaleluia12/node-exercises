
// esse he bem mais complicado de fazer

// o url e baseado no nome do arquivo de log

// code.google.com

// status pendente

/*
esboco de como pode ser

'use strict';

var fs = require('fs');
var http = require('http');

// antes de fazer o download das imanges eu temho que enteder esse negocio
// de stream;
// porque eu vou ter que concatenar stream e escrever esso nos arquivos depois

// acho melhor fazer isso com um txt

var url = 'http://code.google.com/edu/languages/google-python-class/images/puzzle/a-baac.jpg'

var imgStream;

var toWriteStream = fs.createWriteStream('./img.jpg');

http.get(url, function(resp) {
  resp.on('data', function(data) {
    imgStream += data;
  });
  resp.ond('end', function() {
    
  });
});

// o que eu quero fazer eh algo parecido com isso:

var fs = require('fs');
var request = require('request');

var stream = request('http://i.imgur.com/dmetFjf.jpg');
var writeStream = fs.createWriteStream('test.jpg')

stream.on('data', function(data) {
  writeStream.write(data)
});

stream.on('end', fucntion() {
  writeStream.end();
});

stream.on('error', function(err) {
  console.log('something is wrong :( ');
  writeStream.close();
});

*/
