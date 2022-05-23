![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | JS Functions & Arrays

<br>

## Introduction

Manipulating arrays in code is a very common operation. Whether you are creating a total for a shopping cart, grabbing only the first names out of a list of people, or moving a piece on a chessboard, you are probably going to be modifying or manipulating an array in some way.

Here is a link to all of the [`Array methods`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods). If you find yourself confused as to which one to use, try testing a few of them out

## Requirements

- Fork this repo
- Clone it to your machine

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your TAs can check your work.

<br>

## Instructions

You will work on the `src/functions-and-arrays.js` file, which is already loaded in the `index.html` file.

To run the JavaScript code open the `index.html` file use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

To see output of your JavaScript code open the [Console in the Developer Tools](https://developer.chrome.com/docs/devtools/open/#console).

While following the instructions for each iteration, make sure to carefully read the instructions to fully understand the task requirements. Do not rush. You should take your time to carefully read every iteration.

### Note about tests

This LAB, along with some of the labs you will be working on during the bootcamp, is equipped with unit tests to provide automated feedback on your lab progress.

**After you’ve completed the basic iterations**, go to the **"Test Your Code"** section at the bottom. There you'll be asked to install the testing dependencies and run the tests to check how many tests your code is passing.

<br>

### Iteration #1: Find the maximum

Implement the function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest.

<br>

### Iteration #2: Find the longest word

Implement the function `findLongestWord` that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

You can use the following array to test your solution:

```javascript
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
```

<br>

### Iteration #3: Calculate the sum

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named `sumNumbers` that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course we will learn how to do this by using the `reduce` array method, which will make your work significantly easier. For now, let's practice _"declarative"_ way adding values, using loops.

You can use the following array to test your solution:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

<br>

#### Bonus - Iteration #3.1: A generic `sum()` function

**The goal: Learn how to refactor your code.** :muscle:

In the iteration 3, you created a function that returns the sum of an array of numbers. But what if we wanted to know how much is the sum of the length of all of the words in an array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the same function as above, or better saying, we would have to _tweak_ it a little bit so that it can be reused no matter what is in the array that is passed as argument when function `sumNumbers()` is called.

Here we are applying a concept we call **polymorphism**, that is, dealing with a functions' input independently of the types they are passed as.

Let's implement the function `sum()` that calculates the sum for array filled with (_almost_) any type of data. Note that strings should have their length added to the total, and boolean values should be coerced into their corresponding numeric values. Check the tests for more details.

You can use the following array to test your solution:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57
```

<br>

### Iteration #4: Calculate the average

Calculating an average is an extremely common task. Let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing that the _sumNumbers()_?)
2. Take that sum and divide it by the number of elements in the list.

<br>

#### Level 1: Array of numbers

Implement the function `averageNumbers` that expects an array of numbers and returns the average of the numbers:

You can use the following array to test your solution:

```javascript
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

<br>

#### Level 2: Array of strings

Implement the function named `averageWordLength` that receives as a single argument an array of words and returns the average length of the words:

You can use the following array to test your solution:

```javascript
const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
```

<br>

#### Bonus - Iteration #4.1: A generic `avg()` function

Create function `avg(arr)` that receives any mixed array and calculates average. Consider as mixed array an array filled with numbers and/or strings and/or booleans. We are following a similar logic to the one applied on the bonus iteration 4.1. :wink:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
```

<br>

### Iteration #5: Unique arrays

Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Array method.

Do this in the form of a function `uniquifyArray` that receives an array of words as a argument.

You can use the following array to test your solution:

```javascript
const words = [
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
```

<br>

#### Bonus - Iteration #5.1: The `Set` Object

There is a special type of Object in JavaScript called a [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). It only allows unique values to be added into it. The problem is that a Set is not an Array, so it cannot be iterated through. Try finding all unique values by turning the `words` into a Set, then converting that set back into an array.

<br>

### Iteration #6: Find elements

Let's create a simple array search.

Declare a function named `doesWordExist` that will take in an array of words as one argument, and a word to search for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.

You can use the following array to test your solution:

```javascript
const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
```

<br>

### Iteration #7: Count repetition

Declare a function named `howManyTimes` that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

You can use the following array to test your solution:

```javascript
const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
```

<br>

## Test Your Code

<br>

### Automated Testing

Automated software testing is the process of automatically testing an application in order to verify that it meets the technical requirements, and that it behaves as expected.

Having strong _test suites_ can provide you ease of mind, since you will be able to confidently improve upon your work while knowing that your not breaking a previously developed feature.

<br>

### Testing with Jest

Jest is an automated test-runner for JavaScript.

To run your tests, open your terminal at the root directory of the lab, run `npm install` to install your dependencies and `npm run test:watch` to run the tests and generate the `lab-solution.html` file.

```shell
$ cd lab-javascript-functions-and-arrays
$ npm install
$ npm run test:watch
```

<br>

In case you want to check the tests, they are in the `tests/functions-and-arrays.spec.js` file.

Open the `lab-solution.html` file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension.

<br>

#### Pass the tests

When coding with tests, it is super important that you carefully read and understand the errors you are getting, this way you will know for sure what's expected from your code.

Note that **you don't need to execute the functions yourself**, the tests are responsible for doing that. All you should do is declare them, make sure they deal with the parameters passed and that they return what is indicated on the iterations and in the test messages. For some iterations we provide you with a sample array, so that you can do some **manual** testing, if you wish.

<br>

##

**Happy coding!** :heart:
