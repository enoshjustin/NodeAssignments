var rawords = require('random-words');
var fiprint = require('fs');
fiprint.appendFile("text1.txt",rawords()+'\n',function(printing)
 {
    if(printing) 
    {
        console.log(printing);
    } 

    else 

    {
        console.log("The file was saved!");
    }
});
