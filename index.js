// Q1. Create a variable called `kanye` and assign it the string 'please kanye, help me'

var Kanye = 'please kanye, help me';

// Q2. Use the variable `artist` to create a new variable called `genious` that is assigned the string "Is Kanye West a musical genius?"
const artist = 'Kanye West';
var genious = artist + ' a musical genius';

// Q3  Make an object called `family` and give it the following properties:
// family has been `married` on 2014 (Number)
// family is not presidentOfTheUnitedStates (boolean)
// family has `children` called North, Saint and Chicago (array of strings)

const family = {
  'married' : 2014,
  'presidentOfTheUnitedStates' : false,
  'children':['North', 'Saint', 'Chicago']

};


// Q4. Change the `brand` shoes to "adidas" using dot notation
const shoes = {
  'name': 'yeezy',
  'brand': 'nike'
};

shoes.brand = 'adidas';

// Q5. Change the `model` yeezy to "Super Moon Yellow" using square bracket notation
const yeezy = {
  'model': '350'
};

yeezy['model'] = 'Super Moon Yellow';

// Q6. Create an object call "discography"
// The key should be the album name and the value the release year
// Albums are
// * The College Dropout (2004)
// * Late Registration (2005)
// * Graduation (2007)
// * 808s & Heartbreak (2008)
// * My Beautiful Dark Twisted Fantasy (2010)

// Q7. Return a new array from `stronger` with all item in uppercase
const stronger = ['Work it', 'make it', 'do it', 'makes us', 'Harder', 'better', 'faster', 'stronger'];

// Q8. Using this array do the following
const friends = ['jayz', 'rihanna', 'kidcudi'];

// 1. add 'drake' to the end of `friends` array

// 2. remove 'jayz' and store him in a variable called firstFriend

// 3. add 'pusha-t' to the start of `friends` array

// 4. remove 'rihanna' from the array and store him in a variable called secondFriend

// 5. leave 'kidcudi' in the array but put a copy of him on a variable called thirdFriend


// Q9. Write the function `duplicate` that return the expected result
console.log(duplicate(['let', 'the', 'suicide', 'doors', 'up']));
// ❯ ['let', 'the', 'suicide', 'doors', 'up', 'let', 'the', 'suicide', 'doors', 'up']


// Q10. Refactor the current ES5-style function `heartless` in ES6-style.

const heartless = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'heartless');
  }
  return results;
};

const chorus = ['He lost his soul to a woman so ', 'How could you be so ', 'Oh, how could you be so'];

console.log(heartless(chorus));
 // ❯ ['He lost his soul to a woman so heartless', 'How could you be so heartless', 'Oh, how could you be so heartless'];


// Q11. Related to the https://genius.com/search?q=kanye%20west link
// What's the query selector to get all lyrics cards.

// Q12. Related to https://genius.com/search?q=kanye%20west link
// List all api requests urls with their http action verbs.

// Q13. Related to the following api call "curl 'https://genius.com/api/videos?page=1&song_id=70324' --compressed" requested by https://genius.com/Kanye-west-mercy-lyrics
// Could you describe and explain the response?

// Q14. Related to the (React) Twitter component to display a badge with the given user name
<Twitter username='kanyewest'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

// Complete the following component definition of Twitter
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser take in a username returns a promise
// which will resolve with that username's data.

class Twitter extends Component {
  // finish this
}


// Q15. Write in 2 different way the following code base (readFile support promise)

fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI)

// Q17. Describe an ESILV project you worked on that you’re proud of?

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

// Q19. What are some things you like about the developer tools you use?

// Q20. Last question: could you explain me - in your terms - why I decided to focus on Javascript Ecosystem for the Web Architecture(s) course?
