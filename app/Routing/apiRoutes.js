
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

var friends = require('./../Data/friends.js');
// console.log(friends);

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        var userScores = request.body.scores;
        var bestDifference = 1000;
        var bestMatch = {};//Creates an empty object

        for (var i = 0; i < friends.length; i++) {
            var friendDifference = 0;

            for (var j = 0; j < userScores.length; j++) {
                friendDifference += Math.abs(userScores[j] - friends[i].scores[j]);
            }
            if (friendDifference < bestDifference) {
                bestDifference = friendDifference;
                console.log("New friend found: ")
                bestMatch = friends[i];//Captures the friend with the matching scores
                // console.log(bestMatch);
            }
        }
        friends.push(request.body);
        response.json(bestMatch);
        console.log(bestMatch);
    });
}

