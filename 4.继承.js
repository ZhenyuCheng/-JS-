/**
 * @note 继承
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 14:54:00
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 15:07:57
 */

function Parent() {}

function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.constructor = Child;

// Object.create相当于
Object.prototype.create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};
// 或者
Object.prototype.create = function (obj) {
  let b = {};
  b.setPrototype(b, obj); // b.__proto__ = obj
  return b;
};
