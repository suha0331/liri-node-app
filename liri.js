var request = require("request");
var twitter = require("twitter");
var spotify = require('node-spotify-api');
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
};

function movieThis() {
    var movie = process.argv[3];
    params = movie
    request("http://www.omdbapi.com/?t=" + params + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var movieObject = JSON.parse(body);
            console.log(movieObject);
            var movieResults =
                "---------------------------------------------------------------" + "\r\n\n" +
                "Title: " + movieObject.Title + "\r\n\n" +
                "Year: " + movieObject.Year + "\r\n\n" +
                "Imdb Rating: " + movieObject.imdbRating + "\r\n\n" +
                "Rotten Tomatoes Rating: " + movieObject.Ratings[1].Value + "\r\n\n" +
                "Country: " + movieObject.Country + "\r\n\n" +
                "Language: " + movieObject.Language + "\r\n\n" +
                "Plot: " + movieObject.Plot + "\r\n\n" +
                "Actors: " + movieObject.Actors + "\r\n\n" +
                "---------------------------------------------------------------" + "\r\n";
            console.log(movieResults);

        } else {
            console.log("Error :" + error);
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
    if (!twitterUsername) {
        twitterUsername = "SuhaPark1";
    }
    params = { screen_name: twitterUsername };
    client.get("statuses/user_timeline/", params, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                //console.log(response); // Show the full response in the terminal
                var twitterResults =

                    data[i].text + "\r\n" +
                    data[i].created_at + "\r\n" +
                    "\r\n" +
                    "@" + twitterUsername;
                console.log(twitterResults);

            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}


function spotifyThisSong(song) {
    var spotifySong = new spotify({
        id: '1e3d8d1202324283a3e3082b4542b3dc',
        secret: '7eb2ff64b3234d97b6c4659599c51d45'
    });
    var song = process.argv[3];
    params = song;
    spotifySong.search({ type: "track", query: params }, function(err, data) {
        if (!err) {
            var songInfo = data.tracks.items;
            for (var i = 0; i < 5; i++) {
                if (songInfo[i] != undefined) {
                    var spotifyResults =
                        "Artist: " + songInfo[i].artists[0].name + "\r\n\n" +
                        "Song Title: " + songInfo[i].name + "\r\n\n" +
                        "Preview Url: " + songInfo[i].preview_url + "\r\n\n" +
                        "Album Name: " + songInfo[i].album.name + "\r\n\n" +
                        "---------------------------------------------------------------" + "\r\n";
                    console.log(spotifyResults);

                }
            }
        } else {
            console.log("Error :" + err);
            return;
        }
    });
};