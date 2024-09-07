function fibs(num) {
  // Declare and initialize an empty array to store the sequence
  let arr = [];

  // Declare and initialize the sum variable to keep track of the sum
  let sum = 0;

  //   Starting the iteration
  for (let i = 0; i <= num; i++) {
    // Push the value of f(0)
    if (i === 0) {
      arr.push(i);
      continue;
    }

    // Push the value of f(1)
    if (i === 1) {
      arr.push(i);
      continue;
    }

    // Formula to calculate fibonacci: f(n) = f(n-1) + f(n-2)
    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }

  // Return the final array with fiboanacci sequence
  return arr;
}

function fibsRec(num, arr = []) {
  console.log("This was printed recursively");
  // Add the value of f(0) when the length of array is empty
  if (arr.length === 0) {
    arr.push(arr.length);
  }

  //   Add the value of f(1) when the length of array is one
  if (arr.length === 1) {
    arr.push(arr.length);
  }

  //   Return the array when the length of the sequence inside the array is greater than the number
  if (arr.length > num) {
    return arr;
  }

  //  Formula to calculate fiboanacci:  f(n) = f(n-1) + f(n-2)
  let sum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(sum);

  // Recursion Case
  return fibsRec(num, arr);
}

// Result using the iteration
console.log(fibs(8));

// Result using the recursion
console.log(fibsRec(8));
