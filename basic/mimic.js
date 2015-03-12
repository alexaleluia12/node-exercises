'use strict';

var fs = require('fs');

var un = require('underscore');


function stringToList(data) {
  var lines = [], line = [], len = 0, lst = [];
  lines = data.split('\n');
  len = lines.length;
  for(var i=0; i<len; i++){
    line = lines[i].split(' ');
    line.forEach(function(element) {
      lst.push(element);
    });
  }
  return lst;
}

function mimic_dict(filename) {
  var fileContent = '', wordsFile = [], dict = {};
  fileContent = fs.readFileSync(filename, {encoding: 'utf-8'});
  wordsFile = stringToList(fileContent);
  wordsFile.forEach(function(element) {
    dict[element] = [];
  });
  wordsFile.forEach(function(element, index) {
    if(wordsFile[index + 1])
      dict[element].push(wordsFile[index + 1]);
  });
  return dict;
}

function print_mimic(dictMimic, word) {
  var empty = {}, keyFirst = '';
  for(var i in dictMimic){
    keyFirst = i;
    empty[i] = dictMimic[i];
    break;
  }
  var toPrint = '';
  for(var init=1; init<=200; init++){
    if(!word || !(word in dictMimic)){
      word = keyFirst;
      toPrint = word;
    } else {
      word = un.sample(dictMimic[word]);
      toPrint = word;
    }
    console.log(toPrint);
  }
}

function main() {
  var dict;
  if(process.argv.length !== 3){
    console.log('usage: node mimic.js file-to-read');
    process.exit(1);
  }
  dict = mimic_dict(process.argv[2]);
  print_mimic(dict, '');
}

if(require.main === module)
  main();

