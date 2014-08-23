var fcount= require('fs')
var count=0;
fcount.watchFile('text1.txt', function (curr,prev) {
console.log('Last Checked On : ' + prev.mtime);
count++;
console.log('executed :' + count + ' times');
console.log('Todays time :'+ curr.mtime);
//console.log('Todays Excecution Count:' + count);
});