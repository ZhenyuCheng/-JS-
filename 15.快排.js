function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < cur) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), cur, ...quickSort(right)];
}
console.log(quickSort([3, 6, 2, 4, 1]));
