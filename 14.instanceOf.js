/**
 * @note 手写 instanceof 操作符实现
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 19:23:55
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 19:30:44
 */

function myInstanceOf(left, right) {
  right = right.prototype;
  left = left.__proto__;
  while (left !== right && left !== null) {
    if (left === right) return true;
    left = left.__proto__;
  }
  if (left === right) {
    return true;
  }

  if (left === null) {
    return false;
  }
}

console.log(myInstanceOf([], Array));

function Parent() {}
let parent = new Parent();
console.log(myInstanceOf(parent, Object));
console.log(myInstanceOf(parent, Parent));
console.log(myInstanceOf(parent, Array));
