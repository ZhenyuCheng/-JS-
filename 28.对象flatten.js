// const obj = {
//     a: {
//            b: 1,
//            c: 2,
//            d: {e: 5}
//        },
//     b: [1, 3, {a: 2, b: 3}],
//     c: 3
//    }

//    flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function flatten(obj) {
  let ans = {};
  function itr(prefix, obj) {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        itr(`${prefix}[${index}]`, item);
      });
    } else if (typeof obj === "object" && obj !== null) {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          itr(`${prefix}${prefix ? "." : ""}${key}`, obj[key]);
        }
      }
    } else {
      ans[prefix] = obj;
    }
  }

  itr("", obj);
  return ans;
}

const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

console.log(flatten(obj));
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
