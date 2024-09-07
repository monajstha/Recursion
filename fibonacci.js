function fibs(num) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      arr.push(i);
      continue;
    }

    if (i === 1) {
      arr.push(i);
      continue;
    }

    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  return arr;
}

console.log(fibs(3));
