
let s = 0;
let  nbArgs = process.argv.length;
for (i=2; i<nbArgs; i++) {
	s +=Number (process.argv[i]);
}
console.log(s)