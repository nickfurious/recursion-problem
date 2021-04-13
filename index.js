// get factorial with a for loop

function getFactorial(n) {

  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    //n = 5
    for (let i = n - 1; i >= 1; i--) {

      n = n * i; 
      // we are going to use i and n
    }
  }
  return n;
}

console.log(getFactorial(5));
// output will be 120




// Always start with what I know (for sure)
// What do I NOT know (for sure)