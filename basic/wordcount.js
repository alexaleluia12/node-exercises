'use strict';
var fs = require('fs');

var un = require('underscore');

// TODO
// sorte the json before print
// implement `print_top`

function mapWords(arg) {
  var len = arg.length, maped = {};
  for(var i=0; i<len; i++){
    var regex = /[-.',;:"!?\[\])(`]/g
    var words = arg[i].replace(regex, ' ').split(' ');
    var lenWords = words.length;
    for(var j=0; j<lenWords; j++){
      var element = words[j].toLowerCase();
      if(!(element in maped))
        maped[element] = 1;
      else
        maped[element] += 1;
    }
  }
  return maped;
}

function show(arg, all) {
  if(!all){
    for(var i in arg)
      console.log(i + ' ' + arg[i]);
  }else {
    for(var i=0; i<all; i++)
      console.log(i + ' ' + arg[i]);
  }
}

function print_words(filename) {
  var mapedWords;
  fs.readFile(
     filename
   , {encoding:'utf-8'}
   , function(err, data) {
       if(err) throw err;
       mapedWords = mapWords(data.split('\n'));
       show(mapedWords);
  });
}

function main(first_argument) {
  var option ='', filename = '';
  if(process.argv.length != 4){
    console.log('usage: node wordcount.js {--count | --topcount} file');
    process.exit(1);
  }
  
  option = process.argv[2];
  filename = process.argv[3];
  if(option === '--count')
    print_words(filename);
  else if(option === '--topcount')
    print_top(filename);
  else {
   console.log('unknown option: ' + option);
   process.exit(0);
  }
}

if(require.main === module)
  main();
//  var lst = ['in or blue coll', 'in it or', 'sky in']
//  var dict = mapWords(lst);
//  show(dict);
  
