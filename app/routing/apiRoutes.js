app.get("/api/friends", function (req, res) {
  return res.json(friends);
});
app.post("/api/friends", function (req, res) {
  // cSpell.ignore newFriend
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;
  console.log(newFriend);

  // stringify??
  // need to have "name, picture,[survey values]"
 
  var newFriendRA = [];
  for (let i=0; i<req.body.length; i++)
    newFriendRA.push(res[i])
 // parse the req.body into an array of integers

  //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriendRA);

//  now loop through the whole array, excluding this new member
var lowestDiff = 0
var bestName = '';
// read friends.js into an array
var friends = [];
//  calculate the difference between each element of the survey array and store score with that with the username
friendLoop: for (let j = 0; j<friends.length; j++){
    var myDiff = 0;
    for (let k = 0; k<survey.length; k++) {
      myDiff =+ Math.abs(parseInt(newFriendRA[i]) - parseInt(friends[j] [k]));
      if (myDiff>lowestDiff) 
      // exit the array, this isn't a winner
      {  continue friendLoop; }
      
    }
    //  if the score is lower than the previous 
    // only store the name & picture if it is lowestDiff
    // if we do <=, we'll get the most recent lowest
    if (myDiff<=lowestDiff) {
      bestName = friends[k].name
      bestPhoto = friends[k].photo
    }
   
  }
  
  // modal form with name and picture
  // add this newFriend to the json

});
