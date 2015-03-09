'use strict';

var fs = require('fs');


function mapWords(arg) {
  var len = arg.length, maped = {}, aWord, words = [];
  for(var i=0; i<len; i++){
    if(arg[i].length === 0)
      continue;
    var regex = /[-.,;:'"!?\[\])(`\d]/g;
    var space = /\s+/g;
    aWord = arg[i].replace(regex, ' ');
    words = aWord.replace(space, ' ').split(' ');
    var lenWords = words.length;
    for(var j=0; j<lenWords; j++){
      if(words[j].length === 0)
        continue;
      var element = words[j].toLowerCase();
      if(!(element in maped))
        maped[element] = 1;
      else
        maped[element] += 1;
    }
  }
  return maped;
}

function sortByValue(arg) {
  var newJson = {}, aux;
  var len = Object.keys(arg).length;
  
  for(var i=0; i<len; i++){
    var bigger = [0, 0], aux = 0;
    for(var key in arg){
      if((aux === 0 || arg[key] > bigger[1]) && !(key in newJson)){
        bigger[0] = key;
        bigger[1] = arg[key];
      }
      aux = 1;
    }
    newJson[bigger[0]] = bigger[1];
  }
  return newJson;
}

function show(arg, all) {
  if(!all){
    for(var i in arg)
      console.log(i + ' ' + arg[i]);
  }else {
    var count = 0;
      for(var k in arg){
        if(count === all)
          break;
        console.log(k + ' ' + arg[k]);
        count += 1;
      }
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
       show(sortByValue(mapedWords));
  });
}

function print_top(filename) {
  var mapedWords, range = 20;
  fs.readFile(
     filename
   , {encoding:'utf-8'}
   , function(err, data) {
       if (err) throw err;
       mapedWords = mapWords(data.split('\n'));
       show(sortByValue(mapedWords), range);
    }
  );
}

function main() {
  var option = '', filename = '';
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
  
