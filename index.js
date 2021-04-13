// get factorial with a for loop

function fibonacciSequence(n) {

  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    //n = 5
    for (let i = n - 1; i >= 1; i--) {

      n = n * i; 
    }
  }
  return n;
}

console.log(fibonacciSequence(5));
