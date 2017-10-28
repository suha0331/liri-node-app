var fs = require("fs")
var request = require("request");
var twitter = require("twitter");
// var spotify = require("spotify");
var liriCommand = process.argv[2];

switch (liriCommand) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
        // Instructions displayed in terminal to the user
    default:
        console.log("\r\n" + "Try typing one of the following commands after 'node liri.js' : " + "\r\n" +
            "1. my-tweets 'any twitter name' " + "\r\n" +
            "2. spotify-this-song 'any song name' " + "\r\n" +
            "3. movie-this 'any movie name' " + "\r\n" +
            "4. do-what-it-says." + "\r\n" +
            "Be sure to put the movie or song name in quotation marks if it's more than one word.");
};

function movieThis(){
		var movie = process.argv[3];
		if(!movie){
			movie = "mr nobody";
		}
		params = movie
		request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var movieObject = JSON.parse(body);
				// console.log(movieObject);
				var movieResults =
				"---------------------------------------------------------------" + "\r\n"+
				"Title: " + movieObject.Title+"\r\n\n"+
				"Year: " + movieObject.Year+"\r\n\n"+
				"Imdb Rating: " + movieObject.imdbRating+"\r\n\n"+
				"Country: " + movieObject.Country+"\r\n\n"+
				"Language: " + movieObject.Language+"\r\n\n"+
				"Plot: " + movieObject.Plot+"\r\n\n"+
				"Actors: " + movieObject.Actors+"\r\n\n"+
				// "Rotten Tomatoes Rating: " + movieObject.Ratings[1{Source}]+"\r\n"+
				"Rotten Tomatoes URL: " + movieObject.tomatoURL + "\r\n" + 
				"---------------------------------------------------------------" + "\r\n";
				console.log(movieResults);
				
			} else {
				console.log("Error :"+ error);
				return;
			}
		});
	};

function myTweets() {
	var client = new twitter({
		consumer_key: 'vyJMq6BqxdpBAmv96tPNs8hOI',
		consumer_secret: 'tCrE6PsFxiweIyV5GFBMfP5pafuGkoxPxKd5PBTKanHfcGeg4b',
		access_token_key: '921869062019325952-mgYQABdQq9TIsmqZK7suD838K4aH5HO',
		access_token_secret: 'zUFgxObg6hmMOKwoAJ3EMUu2ceDegYJapyvPTzWE221sS', 
	});
	var twitterUsername = process.argv[3];
	if(!twitterUsername){
		twitterUsername = "SuhaPark1";
	}
	params = {screen_name: twitterUsername};
	client.get("statuses/user_timeline/", params, function(error, data, response){
		if (!error) {
			for(var i = 0; i < data.length; i++) {
				//console.log(response); // Show the full response in the terminal
				var twitterResults = 
				 
				data[i].text + "\r\n" + 
				data[i].created_at + "\r\n" +
				"\r\n" + 
				"@" + twitterUsername;
				console.log(twitterResults);
				
			}
		}  else {
			console.log("Error :"+ error);
			return;
		}
	});
}

// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";



// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//     id: '1e3d8d1202324283a3e3082b4542b3dc',
//     secret: '7eb2ff64b3234d97b6c4659599c51d45'
// });