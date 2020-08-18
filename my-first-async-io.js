let  fs = require('fs');
file=process.argv[2]

fs.readFile(file,'UTF8', function callback (err, data) {
    let lines = data.split('\n').length - 1
    console.log(lines)

})