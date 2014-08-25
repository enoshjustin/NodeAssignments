var geocoderProvider = 'google';
var httpsAdapter = 'https';
var extra = {
    apiKey: 'AIzaSyAgE6jwNFisINYwn9nVkha0axAAW5hAaWk', // for map quest
    formatter: null         // 'gpx', 'string', ...
};

var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpsAdapter, extra);

// Using callback
// geocoder.geocode('29 champs elysée paris', function(err, res) {
//     console.log(res);
// });
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.	question("Please enter your city : ", function(answer) 

{
		
	geocoder.geocode(answer).then(function(res) 

    {

      console.log(res).catch(function(err) 
   //   url= api.forecast.io/forecast/c286f970cd025c9e241e461cf55392f9/,lat,log


    	{
        
        console.log(err);
  		
  		})

	})

});	