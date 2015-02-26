'use strict';
var util = require('util');


function match_ends(words) {
  var count = 0;
  words.map(function(word) {
    var len = word.length;
    if(len > 1){
      var first = word[0];
      if(first === word[len-1]){
        count += 1;
      }
    }
  });
  return count;
}


function test(got, expected){
  var prefix = '';
  if(got === expected){
    prefix = ' OK ';
  } else {
    prefix = ' X ';
  }
  var strOut = util.format('%s got: %s, expected: %s;', prefix, got, expected);
  console.log(strOut);
}

function main(){
  console.log('match ends');
  test(match_ends(['aba', 'xyz', 'aa', 'x', 'bbb']), 3);
//  test(match_ends(['', 'x', 'xy', 'xyx', 'xx']), 2);
//  test(match_ends(['aaa', 'be', 'abc', 'hello']), 1)
}

if(require.main === module){
  main();
}
