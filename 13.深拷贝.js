/**
 * @note 手写深拷贝
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 19:22:02
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-28 14:14:02
 */
function deepClone(obj, map = new WeakMap()) {
  if (typeof obj == "object") {
    if (map.has(obj)) {
      return map.get(obj);
    }
    let newObj = Array.isArray(obj) ? [] : {};
    map.set(obj, newObj);
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        map.get();
        if (typeof obj[key] == "object" && obj[key] !== null) {
          newObj[key] = deepClone(obj[key], map);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj; // 记得返回这个对象
  } else {
    return obj;
  }
}

var obj1 = {
  a: 1,
  b: { a: 2 },
  c: [1,3,{d:2}]
};
var obj2 = deepClone(obj1);
console.log(obj1);
console.log(obj2);
