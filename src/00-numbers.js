/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let sumOfAll = 0
  for (i = 0; i < values.length; i++){
    sumOfAll += values[i]
  }
  return sumOfAll;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let timesTwoArray = []

  for(i = 0; i < values.length; i++){
    timesTwoArray.push(values[i] * 2);
  }
  return timesTwoArray
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let oddNumbersOnly = []
  if(values){
    for(i = 0; i < values.length; i++){
      if(values[i] % 2 !== 0){
        oddNumbersOnly.push(values.splice(i, 1));
        i--
      }
    } 
  } 
  return values;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  for (let value of values){
    if (value === val){
      return value
    }
  }
  return null
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  if (values.length === 0){
    return false
  }
  
  for (let value of values){
    if (Math.sign(value) === 1){
      return false
    } 
  }
  
  return true
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  let largestValue = values[0];
  for (i = 1; i < values.length; i++){
    if(values[i] > largestValue){
      largestValue = values[i];
    }
  }
  if (!values.length){
    largestValue = null;
  }
  return largestValue;
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
