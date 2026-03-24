/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  return a+b;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
let reversed ="";
for (let i = str.length -1; i>=0 ; i--)
{
  reversed += str[i];
}
return reversed;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
 if (numbers.length === 0) {
  return null;
 }
 let largest =numbers[0];
 for (let i =1; i <numbers.length;i++)
 {
  if(numbers[i] > largest)
  {
    largest = numbers[i];
  }
 }
 return largest;
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let reversed ="";
  
  for (let i =lowerStr.length -1; i>=0; i--)
  {
    reversed+=lowerStr[i];
  }
  return lowerStr === reversed;
 }

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  let evenNumbers =[];

  for (let i=0; i<numbers.length; i++)
  {
    if (numbers[i]%2 ===0)
    {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers;
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

