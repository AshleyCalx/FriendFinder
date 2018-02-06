// LOAD DATA
var friends = require("../data/friends.js");


// ROUTING
module.exports = function(app) {

// API GET AND POST REQUESTS
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){

// OBJECT HOLDING BEST FRIEND MATCH
		var friendMatch = {
			name:"",
			photo:"",
			matchDifference: 1000
		};

		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		var totalDifference = 0;

		// LOOP FOR FRIEND POSSIBILITIES IN DATABASE

		for (var i = 0; i < friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

			for (var j = 0; j < 10; j++){
				totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));


				if (totalDifference <= friendMatch.matchDifference) {

					friendMatch.name = friends[i].name;
					friendMatch.photo = friends[i].photo;
					friendMatch.matchDifference = totalDifference;
				}
			}
		}
		// SAVE USER DATA IN DATABASE
		friends.push(userData);

		res.json(friendMatch);

	});


}