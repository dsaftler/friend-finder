var friends = require("../data/friends.js");
// now get and post can pull the tableRA from ../data/friends
// ! /api/friends refers to the app.api and calls friends to return the friendsRA as required 
module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    debugger;
    // cSpell.ignore newFriend
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // ! friendData
    friends.push(req.body);
    
  //   var newFriend = req.body;
  //   var newScores = newFriend.scores;
  //   console.log(newFriend);
  //   var myName = newFriend.name;
   
  //   // stringify??
  //   // need to have "name, picture,[survey values]"
  // // if you press enter again, you will match to yourself
  //   var newFriendRA = [];
  //   for (let i=0; i<req.body.length; i++)
  //     newFriendRA.push(res[i])

  // // parse the req.body into an array of integers

  //   //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  // // save this member, and retain the name 
  //   console.log(newFriendRA);

  // //  now loop through the whole array, excluding this new member
  // var lowestDiff = 8;
  // var bestName = '';
  // // read friends.js into an array
  // // var calcFriends = [];
  // //  calculate the difference between each element of the survey array and store score with that with the username
  //   friendLoop: for (let j = 0; j < friends.length; j++){

  //     var myDiff = 0;
  //     for (let k = 0; k<10; k++) {
  //       if ((friends[j]).name === myName) {
  //         console.log(`There is already a friend named: `&{myName});
  //         continue friendLoop
  //       }
  //       myDiff = + Math.abs(parseInt(newScores.scores[k]) - parseInt(friends[j].scores[k]));
  //       if (myDiff>lowestDiff) 
  //       // exit the array, this isn't a winner
  //       {  continue friendLoop; }
        
  //     }
  
  //     //  if the score is lower than the previous 
  //     // only store the name & picture if it is lowestDiff
  //     // if we do <=, we'll get the most recent lowest
  //     if (myDiff<=lowestDiff) {
  //       bestName = friends[j].name
  //       bestPhoto = friends[j].photo
  //       lowestDiff = myDiff;
  //     }
    
  //   }
  //   // friends.push(newFriend);
  //   // modal form with name and picture
  //   // add this newFriend to the json
  //   res.json({status: "OK",matchName: bestName, matchPhoto: bestPhoto});

  });
}
