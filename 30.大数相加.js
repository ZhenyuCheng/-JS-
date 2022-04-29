

function add(a, b) {
  let aLen = a.length;
  let bLen = b.length;
  let sum = 0;
  let ans = [];
  for (let i = aLen - 1, j = bLen - 1, k = 0; i >= 0 || j >= 0; i--, j--, k++) {
    ans[k] = parseInt(a[i] || 0) + parseInt(b[j] || 0) + sum;
    if (parseInt(ans[k]) >= 10) {
      sum = 1;
      ans[k] = ans[k] % 10;
    } else {
        sum = 0;
    }
  }
  if(sum) {
      ans[k] = sum
  }

  return ans.reverse().join('')
}

let a = "9007199254740991";
let b = "1234567899999999999";
console.log(add(a,b))