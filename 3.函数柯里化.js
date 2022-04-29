function curry(fn, ...rest) {
  let length = fn.length;
  return (...args) => {
    let len = args.length;
    console.log(args)
    if (len + rest.length >= length) {
      return fn.apply(this, [...rest, ...args]);
    } else {
      return curry(fn, ...rest, ...args);
    }
  };
}

let sum = (a, b, c, d) => {
  return a + b + c + d;
};

let currySum = curry(sum, 7);
console.log(currySum(3,5)(6))