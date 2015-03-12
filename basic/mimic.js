'use strict';

var fs = require('fs');

var un = require('underscore');

function mapNext(lst) {
  
}

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

function main() {
  console.log(mimic_dict(process.argv[2]));
//  var dict;
//  if(process.argv.length !== 3){
//    console.log('usage: node mimic.js file-to-read');
//    process.exit(1);
//  }
//  dict = mimic_dict(process.argv[2]);
//  print_mimic(dict, '');
}

if(require.main === module){
  main();
//  var test = "hoje carlos dio kall numbero \n dkdk deun return terminal dendo\n parafernalha alugues projeto\n casa mal chado cerveja felicidade";
//  var toCall = function toCall(value){
//    valReturn.push(value);
//  };
//  var myDict = {}
//  var re = throwWords(myDict, test, toCall);
//  console.log(re);
}
