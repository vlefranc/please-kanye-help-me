const cheerio = require('cheerio');

// Q1. Create a variable called `kanye` and assign it the string 'please kanye, help me'

var Kanye = 'please kanye, help me';
console.log(Kanye);
// Q2. Use the variable `artist` to create a new variable called `genious` that is assigned the string "Is Kanye West a musical genius?"
const artist = 'Kanye West';
var genious = artist + ' a musical genius';
console.log(genious);

// Q3  Make an object called `family` and give it the following properties:
// family has been `married` on 2014 (Number)
// family is not presidentOfTheUnitedStates (boolean)
// family has `children` called North, Saint and Chicago (array of strings)

const family = {
  'married' : 2014,
  'presidentOfTheUnitedStates' : false,
  'children':['North', 'Saint', 'Chicago']

};
console.log(family);


// Q4. Change the `brand` shoes to "adidas" using dot notation
const shoes = {
  'name': 'yeezy',
  'brand': 'nike'
};

shoes.brand = 'adidas';
console.log(shoes);

// Q5. Change the `model` yeezy to "Super Moon Yellow" using square bracket notation
const yeezy = {
  'model': '350'
};

yeezy['model'] = 'Super Moon Yellow';
console.log(yeezy);

// Q6. Create an object call "discography"
// The key should be the album name and the value the release year
// Albums are
// * The College Dropout (2004)
// * Late Registration (2005)
// * Graduation (2007)
// * 808s & Heartbreak (2008)
// * My Beautiful Dark Twisted Fantasy (2010)

const discography = {
  'The College Dropout' : 2004,
  'Late Registration' : 2005,
  'Graduation' : 2007,
  '808s & Heartbreak' : 2008,
  'My Beautiful Dark Twisted Fantasy' : 2010
};
console.log(dicography);


// Q7. Return a new array from `stronger` with all item in uppercase
const stronger = ['Work it', 'make it', 'do it', 'makes us', 'Harder', 'better', 'faster', 'stronger'];


var STRONGER = new Array(stronger.length);

  for (var i = 0; i < stronger.length; i++) { 

    STRONGER[i] = stronger[i].toUpperCase();
  };
console.log(STRONGER);
// Q8. Using this array do the following

// 1. add 'drake' to the end of `friends` array

// 2. remove 'jayz' and store him in a variable called firstFriend

// 3. add 'pusha-t' to the start of `friends` array

// 4. remove 'rihanna' from the array and store him in a variable called secondFriend

// 5. leave 'kidcudi' in the array but put a copy of him on a variable called thirdFriend

const friends = ['jayz', 'rihanna', 'kidcudi'];

friends.push('drake');

function removeAt(array, index) {
  var ret = array[index];
  for (var i = index + 1; i < array.length; ++i) {
      array[i - 1] = array[i];
  }
  array.length = array.length - 1;
  return ret;
}

function getIndex(array, item){
  var index = -1;
  for (var i = 0; i < array.length; ++i) {
    if(array[i]==item)
    {
      index=i;
    }
  }
  return index;
}
var firstFriend = removeAt(friends,getIndex(friends,'jayz'));

friends.unshift('pusha-t');

var secondFriend = removeAt(friends,getIndex(friends,'rihanna'));

console.log(friends);
console.log(firstFriend);
console.log(secondFriend);

// Q9. Write the function `duplicate` that return the expected result

function duplicate(array){
  var len = array.length;
  var res = new Array(len*2);
  for (var i =0; i<len;i++)
  {
    res[i]=array[i];
    res[i+len]=array[i];
  }
  return res;
}

const list = ['let', 'the', 'suicide', 'doors', 'up'];

console.log(duplicate(list));
// ❯ ['let', 'the', 'suicide', 'doors', 'up', 'let', 'the', 'suicide', 'doors', 'up']


// Q10. Refactor the current ES5-style function `heartless` in ES6-style.

// TO DO

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

var lyrics_cards=[];
url = '';
var lyric='';
		request(url, function(error, response, html){
			if(!error && response.statusCode == 200){
				var $ = cheerio.load(html);
				$('.selection').each(function(i,element){
		    		var lyric = $(this).find('.kanye-west-mercy-lyrics').attr('href')
		    			lyric.children().each(function(i,element){
		    				lyrics_cards.puch(this);
		    			})
		    		});

		    	};

		    });
// Q12. Related to https://genius.com/search?q=kanye%20west link
// List all api requests urls with their http action verbs.

// TO DO

// Q13. Related to the following api call "curl 'https://genius.com/api/videos?page=1&song_id=70324' --compressed" requested by https://genius.com/Kanye-west-mercy-lyrics
// Could you describe and explain the response?

// TO DO

// Q14. Related to the (React) Twitter component to display a badge with the given user name

// TO DO

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

//TO DO

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

//Three websites that I believe have nice UX/UI would be twitch (with a very immersive and usefull interface), facebook(which was my
//first experience of user interface/experience which keep on expeending) and paypal(with a user interface which allows to follow a lot
// of interactions).

// Q17. Describe an ESILV project you worked on that you’re proud of?

//An ESILV project that I am personnaly proud of would be the PING project we had to make last year.To be honest, every since I was a child
//I have always been fascinated by video games (just blame my brothers). Therefore, when I found the opportunity to  create my own
//as small and uncomplexe as it was, I took it. We created a small turn by turn game. Not only did I have the chance to invent my
//own world and game I also got to learn a whole new tool unused in our engeneering classes: unity. Getting to learn from scratch
//the unic options of this tool was really fullfilling. Although I had to fail many times and felt the urge to throw my computer more
//than once, seeing the end result ( as insignificant as it could look like from the outside ) made me really proud.

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

//Ironically as it could be (or not) an ESILV project that I worked and that I am obviously not proud of would actually the projects
//required for these courses. I started working on the projects without ever finding the courage to actually finish them and proceed
//to further work on my errors resulting in giving the bear minimum if nothing for lack of concrete results to show. So of course
//there is not much pride in an ungiven homework which I do apologize for.

// Q19. What are some things you like about the developer tools you use?

//Some things I liked about about the developper tools I used was to discover a new way to develop my application. Indeed, the new 
//experiences which provided this class, though unsettling at first made me realize the wide range of possibilities which exists
//in computer sciences. Besides, being able to create new application, website from a seemingly simple tool is always quite a wonder
//to me.

// Q20. Last question: could you explain me - in your terms - why I decided to focus on Javascript Ecosystem for the Web Architecture(s) course?

//Javascript Ecosystem is extremly wide, it can provide a lot of possibilities. Being that it should be our first (at least for most
//of us) encounter with Web Architecture, it was important for us students to understand the depths and layers of such things.
//Javasccipt does this well as it seems like let us discover all the aspects of Web Architecture as messy as it can seem at first.