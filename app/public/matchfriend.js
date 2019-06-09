var friends = require("./app/data/friends.js")
// require("../data/friends.js");
var newFriend = {name: 'Maria', photo:'fdsfdsfsd', scores: ['4','2','1','3','2','5','4','3','2','1']};
var newScores = newFriend.scores;
console.log(newFriend);
var myName = newFriend.name;

// stringify??
// need to have "name, picture,[survey values]"
// if you press enter again, you will match to yourself
// parse the req.body into an array of integers

//newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
// save this member, and retain the name 


//  now loop through the whole array, excluding this new member
var lowestDiff = newScores.length*4;
var bestName = '';
// read friends.js into an array
// var calcFriends = [];
//  calculate the difference between each element of the survey array and store score with that with the username
friendLoop: for (let j = 0; j < friendsRA.length; j++) {

  var myDiff = 0;
  for (let k = 0; k < 10; k++) {
    if ((friendsRA[j]).name === myName) {
      console.log(`There is already a friend named: ` & { myName });
      continue friendLoop
    }
    myDiff = + Math.abs(parseInt(newScores.scores[k]) - parseInt(friendsRA[j].scores[k]));
    if (myDiff > lowestDiff)
    // exit the array, this isn't a winner
    { continue friendLoop; }

  }

  //  if the score is lower than the previous 
  // only store the name & picture if it is lowestDiff
  // if we do <=, we'll get the most recent lowest
  if (myDiff <= lowestDiff) {
    bestName = friends[j].name
    bestPhoto = friends[j].photo
    lowestDiff = myDiff;
  }

}