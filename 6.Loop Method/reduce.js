//Reduce = It takes an array of vale and resulting in a single value
// It has atleast two prameter = 1. accumulator/total  2. Current Value

const arr = [34, 35, 67, 57, 109, 12, 36]

/*
                  accumulator               currentValue        returnValue
    first call        34                        35                  69
    second call       69                        67                  136
    third call        136                       57                  193
    fourth call       193                       109                 302
    fifth call        302                       12                  314
    sixth call        314                       36                  350 -> Ans
*/

const sums = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(sums); // Ans : 350

/*
                  accumulator               currentValue        returnValue
    first call        34                        35                  35   return currentValue  
    second call       35                        67                  67   return currentValue
    third call        67                        57                  67   return accumulator
    fourth call       67                        109                 109  return currentValue
    fifth call        109                       12                  109  return accumulator
    sixth call        109                       36                  350  return accumulator   ...Ans = 109
*/

const max = arr.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) return accumulator
  return currentValue
})

console.log(max); // Ans 109

// With max and min key word

const maxKeyword = arr.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue)
})

console.log(maxKeyword); // Ans 109


const minKeyword = arr.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue)
})

console.log(minKeyword); // Ans 12

// OPtional Value 

const sumWithOptional = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100) // here 100 + 350 = 450... this optional number tells taht accumulator start with 100+34 = 134

console.log(sumWithOptional); // Ans - 450


//Practice

const votes = ["y", "n", "y", "n", "y", "n", "y", "n", "y", "n", "n", "y", "y", "y", "n", "y",]

const tally = votes.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++
  } else {
    accumulator[currentValue] = 1
  }

  return accumulator

}, {}) // accumulator start with empty object

console.log(tally); // Ans {y:9 n:7}

const tally1 = votes.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
  return accumulator
}, {}) // accumulator start with empty object

console.log(tally1); // Ans {y:9 n:7}

const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]

// const groupedBookByRating = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(books.rating)
//   if (!groupedBooks[key]) groupedBooks[key] = []
//   groupedBooks[key].push(book)
//   return groupedBooks
// }, {})

// console.log(groupedBookByRating);   // Not Working..why ?


const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})

console.log(groupedByRatings);

