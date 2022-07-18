// there will be a base case. The base case tells the recursive function 
// when it no longer needs to call itself. It is a simple case where the 
// return value is already known. There will also be a recursive call 
// which executes the original function with different arguments. If 
// the function is written correctly, eventually the base case will be reached.
// For example, say you want to write a recursive function that returns an array 
// containing the numbers 1 through n. This function will need to accept an argument,
//  n, representing the final number. Then it will need to call itself with 
//  progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
// The value [1, 2, 3, 4, 5] will be displayed in the console.
// At first, this seems counterintuitive since the value of n decreases, but the values in the 
// final array are increasing. This happens because the push happens last, after the recursive call has returned. 
// At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

//also example:

// Only change code below this line
function countdown(n){
    if(n < 1){
      return []
    }
    else{
       const countArray = countdown(n - 1)
       //unshift puts at begining of array
       countArray.unshift(n)
       return countArray
    }
    
  }
  console.log(countdown(10))
  // Only change code above this line



  // RECURSION TO CREAT A RANGE OF NUMBERS
  
// We have defined a function named rangeOfNumbers with two parameters. The function should return an 
// array of integers which begins with a number represented by the startNum parameter and ends with a
//  number represented by the endNum parameter. The starting number will always be less than or equal 
//  to the ending number. Your function must use recursion by calling itself and not use loops of any 
//  kind. It should also work for cases where both startNum and endNum are the same.



function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
  ? [startNum]
  : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// OR

  function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
    console.log(rangeOfNumbers(6,9))