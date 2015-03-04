'use strict';

var util = require('util');

var un = require('underscore');

//A
function donuts(count) {
  var strOut = 'Number of donuts: ';
  if(count >= 10)
    strOut += 'many';
  else
    strOut += String(count);
    
  return strOut;
}

//B
function both_ends(string) {
  var strOut = '';
  if(string.length < 2)
    return strOut;
  strOut += string.slice(0, 2) + string.slice(-2);
  return strOut;
}

//C
function fix_start(string) {
  if(string.length === 0)
    return '';
  var firstChar = string[0];
  var first = new RegExp(firstChar, 'g');
  var strOut = string.replace(first, '*');
  return firstChar + strOut.slice(1, strOut.length);
}

//D
function mix_up(a, b) {
  if(a.length < 2 || b.length < 2)
    return '';
  var newStr = b.slice(0, 2) + a.slice(2, a.length) + ' ' +
               a.slice(0, 2) + b.slice(2, b.length);
  return newStr;               
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
  console.log('donuts');
  test(donuts(4), 'Number of donuts: 4');
  test(donuts(9), 'Number of donuts: 9');
  test(donuts(10), 'Number of donuts: many');
  test(donuts(99), 'Number of donuts: many');
  
  console.log('');
  console.log('both_ends');
  test(both_ends('spring'), 'spng');
  test(both_ends('Hello'), 'Helo');
  test(both_ends('a'), '');
  test(both_ends('xyz'), 'xyyz');
  
  console.log('');
  console.log('fix_start');
  test(fix_start('babble'), 'ba**le');
  test(fix_start('aardvark'), 'a*rdv*rk');
  test(fix_start('google'), 'goo*le');
  test(fix_start('donut'), 'donut');
  
  console.log('');
  console.log('mix_up');
  test(mix_up('mix', 'pod'), 'pox mid');
  test(mix_up('dog', 'dinner'), 'dig donner');
  test(mix_up('gnash', 'sport'), 'spash gnort');
  test(mix_up('pezzy', 'firm'), 'fizzy perm');
}

if(require.main === module) 
  main();
  
