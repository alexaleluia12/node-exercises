'use strict';

var util = require('util');

var un = require('underscore');

//D
function verbing(string) {
  if(string.length < 3)
    return string;
  var ing = 'ing', ly = 'ly';
  if(string.slice(-3) === ing)
    return string + ly;
  return string + ing;
}

//E
function not_bad(string) {
  var regex = /\bnot.+?bad\b/;
  return string.replace(regex, 'good');
}

//F
function front_back(a, b) {
  function halves(string) {
    var len = string.length, center;
    if(len%2 === 0) {
      center = len / 2;
      return [string.slice(0, center), string.slice(center, len)];
    } else {
      center = (len/2) + 1;
      return [string.slice(0, center), string.slice(center, len)];
    }
  }
  var aHelve = halves(a);
  var bHelve = halves(b);
  return aHelve[0] + bHelve[0] + aHelve[1] + bHelve[1];
  
}

function test(got, expected) {
  var prefix = '';
  if(un.isEqual(got, expected))
    prefix = ' OK ';
  else
    prefix = ' X ';
  var outStr = util.format('%s got: %s expected: %s',
                           util.inspect(prefix),
                           util.inspect(got),
                           util.inspect(expected));
  console.log(outStr);
}

function main() {
  console.log('verbing');
  test(verbing('hail'), 'hailing');
  test(verbing('swiming'), 'swimingly');
  test(verbing('do'), 'do');
  
  console.log('');
  console.log('not_bad');
  test(not_bad('This movie is not so bad'), 'This movie is good');
  test(not_bad('This dinner is not that bad!'), 'This dinner is good!');
  test(not_bad('This tea is not hot'), 'This tea is not hot');
  test(not_bad("It's bad yet not"), "It's bad yet not");
  
  console.log('');
  console.log('front_back');
  test(front_back('abcd', 'xy'), 'abxcdy');
  test(front_back('abcde', 'xyz'), 'abcxydez');
  test(front_back('Kitten', 'Donut'), 'KitDontenut');
}

if(require.main === module) 
  main();
