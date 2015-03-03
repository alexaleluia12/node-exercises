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


//E
function linear_merge(list1, list2) {
  var newList = [];
  list1.forEach(function(elemet) {
    newList.push(elemet);
  });  
  list2.forEach(function(element) {
    newList.push(element);
  });
  return un.sortBy(newList, function(element) {
    return element;
  });
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
  test(remove_adjacent([1, 2, 2, 3]), [1, 2, 3]);
  test(remove_adjacent([2, 2, 3, 3, 3]), [2, 3]);
  test(remove_adjacent([]), []);
  
  console.log('');
  console.log('linear_merge');
  test(linear_merge(['aa', 'xx', 'zz'], ['bb', 'cc']),
       ['aa', 'bb', 'cc', 'xx', 'zz']);
  test(linear_merge(['aa', 'xx'], ['bb', 'cc', 'zz']),
       ['aa', 'bb', 'cc', 'xx', 'zz']);
  test(linear_merge(['aa', 'aa'], ['aa', 'bb', 'bb']),
       ['aa', 'aa', 'aa', 'bb', 'bb']); 
}

if(require.main === module) 
  main();
