'use strict';
var util = require('util');

var un = require('underscore');


// A
function match_ends(words) {
  var count = 0;
  words.forEach(function(word) {
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

// B
function front_x(words) {
  var xStart = [], normal = [];
  words.forEach(function(word, i) {
    if(word[0] === 'x'){
      xStart.push(word);
    } else {
      normal.push(word);
    }
  });
  xStart.sort();
  normal.sort();
  return xStart.concat(normal);
}

// C
// well js don't tuple so, I will wear Array.
function sort_last(lst) {
  return un.sortBy(lst, function(e) {
    return un.last(e);
  });
}

// ========================================

function test(got, expected){
  var prefix = '';
  if(un.isEqual(got, expected)){
    prefix = ' OK ';
  } else {
    prefix = ' X ';
  }
  // wear util.inspect() to property print complex object
  // the end result in much like Python
  var strOut = util.format('%s got: %s expected: %s', 
                           util.inspect(prefix),
                           util.inspect(got),
                           util.inspect(expected));
  console.log(strOut);
}

function main(){
  console.log('match ends');
  test(match_ends(['aba', 'xyz', 'aa', 'x', 'bbb']), 3);
  test(match_ends(['', 'x', 'xy', 'xyx', 'xx']), 2);
  test(match_ends(['aaa', 'be', 'abc', 'hello']), 1)
  
  console.log('');
  console.log('front_x');
  test(front_x(['bbb', 'ccc', 'axx', 'xzz', 'xaa']),
       ['xaa', 'xzz', 'axx', 'bbb', 'ccc'])
  test(front_x(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']),
       ['xaa', 'xcc', 'aaa', 'bbb', 'ccc'])
  test(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']),
       ['xanadu', 'xyz', 'aardvark', 'apple', 'mix'])
       
  console.log('');
  console.log('sort_last');
  test(sort_last([[1, 3], [3, 2], [2, 1]]),
       [[2, 1], [3, 2], [1, 3]]);
  test(sort_last([[2, 3], [1, 2], [3, 1]]),
       [[3, 1], [1, 2], [2, 3]]);
  test(sort_last([[1, 7], [1, 3], [3, 4, 5], [2, 2]]),
       [[2, 2], [1, 3], [3, 4, 5], [1, 7]]);
  
}

if(require.main === module){
  main();
}
