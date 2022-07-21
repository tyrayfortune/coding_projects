// we can generate a random whole number that falls within a range of two specific numbers.
// To do this, we'll define a minimum number min and a maximum number max.
// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
// Math.floor(Math.random() * (myMax - myMin + 1)) + myMin



function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  
  console.log(randomRange(10,30))
  console.log(randomRange(10,30))
  console.log(randomRange(10,30))