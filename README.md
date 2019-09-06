# friend-finder
This full-stack application uses 
Node.js & Express to route web pages for a survey.html and home.html, storing and retrieving json objects.
The survey draws 10 questions from a 300 Question personality test (https://www.truity.com/test/300-question-personality-test) that ask the user to rank how accurately the question describes a personality trait where 1 is Strongly Agree and 5 is Strongly Disagree.
There is a file of pre-made "friends". (Photos from images.pexels.com/photos/) Their scores are compared to the user's scores for the closest (absolute value of differences) aggregated across all questions.

For ease of testing:
All 1s will match Jacob
All 3s will match Louisa
All 5s will match Lucy
1,2,3,4,5,4,3,2,1,1 will match Liam

Using: 
During the entry session, a user will not be matched to himself, but changing the answers may yield different matches. 

New user entries are not written to the friends.js file, so refreshing the Survey page will reset back to the original set of Friends.

There is validation to check for all form values being filled, but not to validate that a photo is a valid photo.

Issues: 
I was very frustrated by my inability to find a debugger that would follow from the html to the api scripts.  I was using Chrome debugger with folders open and vsCode debugger attached to node, but could not get breakpoints to pause where & when I needed them too.

Future builds: 
Post testing, the modal should return to the Home page or blank out the values in the survey.  For testing, though, it saves the time of re-entering for submit.

I dislike meaningless tasks, so I would like to structure the questions to at least test a single personality aspect, like introversion/extroversion.

Heroku Link: https://lit-garden-38073.herokuapp.com/
