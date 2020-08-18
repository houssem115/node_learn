let fs = require('fs');

let files = process.argv[2];

file = fs.readFileSync(files);

contents = file.toString();

console.log(contents.split('\n').length - 1);