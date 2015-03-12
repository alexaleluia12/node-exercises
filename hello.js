'use strict';

function main() {
  var name = '';
  if(process.argv.length >= 3)
    name = process.argv[2];
  else
    name = 'World';
  console.log('Hellody ', name);
}

if(require.main === module)
  main();
