// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
  if(a>b){
    return a
  }else{
    return b
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(q) {
  if(q.length === 0){
    return null;
    }
  let longest ="";
  for(let i=0;i<q.length;i++){
    if(q[i].length > longest.length){
      longest = q[i];
   }
 }
return longest;
}
findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if(numbers.length === 0){
    return 0;
  }
  
  let sum =0;
  for(let i = 0; i<numbers.length; ++i){
   sum += numbers[i];
    
  }
  return (sum);
}

sumNumbers(numbers)
// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

  if(numbersAvg.length === 0){
  return null;
  }
  let numAvg = 0;
  for(let i=0;i<numbersAvg.length; ++i){
    numAvg += numbersAvg[i];
    
  }
  return numAvg / numbersAvg.length
}
averageNumbers(numbersAvg)
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
if(wordsArr.length === 0){
  return null;
}
  let sum = 0;
  for(let i=0; i<wordsArr.length; ++i){
    sum += wordsArr[i].length
  
  }
  return (sum / wordsArr.length)
}
averageWordLength(wordsArr)

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {
  if(wordsUnique.length === 0){
    return null;
  }
  let sum = []
  for(let i = 0; i<wordsUnique.length; ++i){
    
    if(sum.indexOf(wordsUnique[i]) === -1){
      sum.push(wordsUnique[i])
    }
  }
  return sum;
}
uniquifyArray(wordsUnique)

// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet() {}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, specificWord) {
  if(wordsFind.length === 0){
    return null;
  }
  for(let i=0;i<wordsFind.length; ++i){
    if(wordsFind[i] === specificWord){
      return true;
  } 

} 
  return false;
}
doesWordExist(wordsFind,'matter')

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'machine',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

let word = 'machine'

function howManyTimes(wordsCount,word) {
 let count = 0
  for(let i=0; i<wordsCount.length; ++i){
    if(word === wordsCount[i]){
      count++
  }
  }

return (count)
}
howManyTimes(wordsCount,word)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}
