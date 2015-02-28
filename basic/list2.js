'use strict';

var util = require('util');

var un = require('underscore');

//D
function remove_adjacent(nums) {
  var newList = [];
  function look(init, end) {
    while(true){
      if(nums[init] !== nums[end])
        return [nums[init], end];
      init = end;
      end += 1;
    }
  }
  var len_ = nums.length;
  var index = 0;
  while(index < len_){
    var lt = look(index, index+1);
    newList.push(lt[0]);
    index = lt[1];
  }
  return newList;
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
  console.log('remove_adjacent');
  test(remove_adjacent([1,2,2,3]), [1,2,3]);
  test(remove_adjacent([2,2,3,3,3]), [2,3]);
  test(remove_adjacent([]), []);
}

if(require.main === module) 
  main();
