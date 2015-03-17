'use strict';

var fs = require('fs');

/*
Baby Names exercise

Define the extract_names() function below and change main()
to call it.

For writing regex, it's nice to include a copy of the target
text for inspiration.

Here's what the html looks like in the baby.html files:
...
<h3 align="center">Popularity in 1990</h3>
....
<tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>
<tr align="right"><td>2</td><td>Christopher</td><td>Ashley</td>
<tr align="right"><td>3</td><td>Matthew</td><td>Brittany</td>
...


Suggested milestones for incremental development:
 -Extract the year and print it
 -Extract the names and rank numbers and just print them
 -Get the names data into a dict and print it
 -Build the [year, 'name rank', ... ] list and print it
 -Fix main() to use the extract_names list

*/
// A
function extract_names(filename) {
  var regexYear = /\d+/;
  var lstSring = [];
  var year = filename.match(regexYear);
  if(year){
    lstSring.push(year[0]);
    fs.readFile(filename, {encoding: 'utf-8'}, dealFile);
  }
  else
    process.exit(1);

  function dealFile(err, data) {
    var regex;
    regex = /<tr align="right"><td>(\d+)<\/td><td>(\w+)<\/td><td>(\w+)<\/td>/;
    if (err) throw err;
    data.split('\n').forEach(function(element) {
      var match = regex.exec(element);
      if(match)
        console.log(match[1] + ' ' + match[2] + ' ' + match[3]);
    });
  }

}

if(require.main == module)
  extract_names(process.argv[2])