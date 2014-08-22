var fs = require('fs');
fs.appendFile("text.txt", "Hello world!\n", function(printing) {
    if(printing) {
        console.log(printing);
    } else {
        console.log("The file was saved!");
    }
});
