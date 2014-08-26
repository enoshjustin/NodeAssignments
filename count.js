var fiprint= require ("fs");
var rawords = require ("random-words");

		fiprint.appendFile('randomtext.txt',rawords()+'\n',function(err1){
		
		if(err1) {
			throw err1;
			console.log(err1);
		}
		else
			{
				fiprint.readFile('randomtext.txt','utf8',function(err2,data){
				if(err2){
					throw err2;
				}
				else{
					var res = data.split('\n');
					// console.log("Words Added : \n" + res);
					var len = res.length-1; 
					console.log("The Counter is Updated to : " + len);
					console.log("File Updated");
			}
		})
	}
});