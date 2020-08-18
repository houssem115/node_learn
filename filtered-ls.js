
let fs=require('fs');
let path=require('path')
let dir =process.argv[2]
let ext =process.argv[3]
fs.readdir(dir,function(err,list){
   list.filter(el=>el.endsWith(`.${ext}`)).map(el=> console.log(el))

})