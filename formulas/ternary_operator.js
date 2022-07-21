// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
// and c is the code to run when the condition returns false.
// The following function uses an if/else statement to check a condition:
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
// This can be re-written using the Ternary operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}



// You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

// another example:
function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative" : "zero"
        
   }

console.log(checkSign(10))
