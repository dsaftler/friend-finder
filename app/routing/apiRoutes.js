var friends = require("../data/friends.js");
// now get and post can pull the tableRA from ../data/friends
// ! /api/friends refers to the app.api and calls friends to return the friendsRA as required 
module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
       // req.body hosts is equal to the JSON post sent from the user
   
       
    var newFriendRA = [];
    for (let i = 0; i < req.body.scores.length; i++) {
      newFriendRA.push(req.body.scores[i])
    }
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: newFriendRA
    };
    //  var newScores = req.body.scores;
    var myName =req.body.name;
    // console.log("req Name: " + req.body.name);
    // console.log("req Photo: " + req.body.photo);
    // console.log("newScores: " + newFriendRA);
    
    friends.push(newFriend);
    // console.log('Pushed: ' + req.body.name);
    // console.log("newFriend: "+newFriend.name);
    // console.log("newFriend: " + newFriend.photo);
    // console.log("newFriend: " + newFriend.scores);
    // if you press enter again, you will match to yourself
    
    // save this member, and retain the name 
    //   console.log(newFriendRA);
    
    // //  now loop through the whole array, excluding this new member
    var lowestDiff = 40;
    var bestName = '';
    
    //  calculate the difference between each element of the survey array and store score with that with the username
    // console.log('Friends Length: '+friends.length)
    friendLoop: for (let j = 0; j < friends.length; j++){
      // console.log(friends[j]);
      theseScores=friends[j].scores;
      // console.log((friends[j]).name.trim() + ' ' + myName);
      if ((friends[j]).name.trim() === myName) {
        // console.log(`There is already a friend named: `&{myName});
        continue friendLoop
      }
      var myDiff = 0;
      for (let k = 0; k < newFriendRA.length; k++) {
        // console.log('K: ' + k)
        myDiff = myDiff + (Math.abs(parseInt(newFriendRA[k]) - parseInt(theseScores[k])));
        // console.log ("myDiff: "+myDiff)
        if (myDiff>lowestDiff) 
        // exit the array, this isn't a winner
        {  continue friendLoop; }
        
      }
      
      //  if the score is lower than the previous 
      // only store the name & picture if it is lowestDiff
      // if we do <=, we'll get the most recent lowest
      // console.log("myDiff: " +myDiff);
      if (myDiff<=lowestDiff) {
        bestName = friends[j].name + "     (difference: " + myDiff+")"
        // console.log('bestName: ' + bestName)
        bestPhoto = friends[j].photo
        // console.log('bestPhoto: ' + bestPhoto)
        lowestDiff = myDiff;
      }
      
    }
    // modal form with name and picture
    // friends.push(req.body);
    res.json({status: "OK",name: bestName, photo: bestPhoto});

  });
}
