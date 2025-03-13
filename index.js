const lbDiary = [
  {
    title: 'The Rule of Jenny Pen',
    director: 'James Ashcroft',
    year: 2025,
    genres: ['Horror', 'Drama', 'Thriller'],
    runtime: {
      unit: 'Minutes',
      length: 104
    },
    stars: 3.5,
    entryLogged: 'March 11, 2025',
    review: null,
    comments: [
      {
        username: 'elizabeth-dane',
        text: 'Loved it!',
        date: 'March 12, 2025'
      },
      {
        username: 'rj-macready',
        text: 'Rush and Lithgow killed it.',
        date: 'March 12, 2025'
      }
    ]
  },
  {
    title: 'Mickey 17',
    director: 'Bong Joon Ho',
    year: 2025,
    genres: ['Comedy', 'Adventure', 'Science Fiction'],
    runtime: {
      unit: 'Minutes',
      length: 137
    },
    stars: 3.5,
    entryLogged: 'March 9, 2025',
    review: "Feels like it's missing an act.",
    comments: [
      {
        username: 'elizabeth-dane',
        text: 'NO NOT THE SAUCEEEEEEEEE!!!!!',
        date: 'March 10, 2025'
      },
    ]
  },
  {
    title: 'The Monkey',
    director: 'Osgood Perkins',
    year: 2025,
    genres: ['Horror', 'Comedy'],
    runtime: {
      unit: 'Minutes',
      length: 98
    },
    stars: 2,
    entryLogged: 'February 22, 2025',
    review: "Despite the grotesquery, it feels oddly toothless and lacking stakes.",
    comments: [
      {
        username: 'john-trent',
        text: "I also didn't find it particularly funny."
      }
    ]
  },
  {
    title: 'Okja',
    director: 'Bong Joon Ho',
    year: 2017,
    genres: ['Science Fiction', 'Drama', 'Adventure'],
    runtime: {
      unit: 'Minutes',
      length: 122
    },
    stars: 4.5,
    entryLogged: 'January 12, 2025',
    review: null,
    comments: [
      {
        username: 'rj-macready',
        text: 'That moment with the baby superpig at the end gets me every time.',
        date: 'January 13, 2025'
      }
    ]
  }
];


/*
Create a function called longerThanTwoHours that takes in an array of 
movie entry objects as you see above. This function should use the native 
filter method to return a new array of only the movie entry objects that 
have a runtime greater than 2 hours.
*/

function longerThanTwoHours(array){
return array.filter(movie => {
  if (movie.runtime.length > 120)
return true;
})
}

//console.log(longerThanTwoHours(lbDiary))

/*
Create a function called filterByCommenter that takes in an array of movie
entries objects as you see above and a string representing a username. This
function should use the native filter method to return a new array of only
the movie entry objects that have a comment by the input commenter.

example output:
filterByCommenter(lbDiary, 'elizabeth-dane');
// => [{Rule of Jenny Pen}, {Mickey 17}]
*/

function filterByCommenter(array, string){
  return array.filter(movie => {
    for(let i = 0; i < movie.comments.length; i++){
      if(movie.comments[i].username === string){
        return true;
      }
    }
    return false;
  })
}

//console.log(filterByCommenter(lbDiary, 'elizabeth-dane'))
/*
Create a function called getRuntimes that takes in an array of movie
entries objects as you see above. This function should use the native 
map method to return a new array of only the runtimes of each film as a string.

example output:
getRuntimes(lbDiary);
// => ['104 minutes', '137 minutes', '98 minutes', '122 minutes']
*/

function getRuntimes(array){
  return array.map(movie => {
    return `${movie.runtime.length} minutes`
  })
}

//console.log(getRuntimes(lbDiary))

/*
Create a function called getCommentCharacters that takes in an array of movie
entries objects as you see above. This function should use the native 
map method to return a new array of strings. As the function iterates over
every movie entry object, it should iterate through every comment and add the
first letter of the text of every comment to a string.

example output:
getCommentCharacters(lbDiary)
// => ['LR', 'N', 'I', 'T]
*/

function getCommentCharacters(array){
  return array.map(movie => {
    let output = ''
    for (let i = 0; i < movie.comments.length; i++){
      
      let firstLetter = movie.comments[i].text[0];
      output += firstLetter
      
    }
    return output;
  })
  
}

//console.log(getCommentCharacters(lbDiary))
/*
Create a function called getObjects that takes in an array of movie
entries objects as you see above. This function should use the native 
reduce method to return a new array of objects. Each object should have a key
of `movie` set to the movie's title and release year. It should also have a
key of `genre` set to the first genre listed in the genres property.

example object
{
  movie: 'The Rule of Jenny Pen (2025)'
  genre: 'Horror'
}
*/

function getObjects(array){
  return array.reduce((acc, current) => {
    let obj = {};
    obj.movie = `${current.title} (${current.year})`
    obj.genre = `${current.genres[0]}`;
    acc.push(obj);
    return acc;
  }, [])
}

//console.log(getObjects(lbDiary))

/*
Create a function called getCommentsByLength that takes in an array of movie
entries objects as you see above. This function should use the native 
reduce method to return a new array of the text of the comment objects that have
more than 40 characters.

example output
getCommentsByLength(lbDiary);
*/

function getCommentsByLength(array){
  return array.reduce((acc, current) => {
    for (let i = 0; i < current.comments.length; i++){
      if(current.comments[i].text.length > 40){
        acc.push(current.comments[i].text)
      }
      return acc;
    }
  }, [])
}

console.log(getCommentsByLength(lbDiary))