/**
 * @note 实现防抖、节流
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 20:09:45
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 20:33:51
 */

function debounce(fn, delay) {
  let timer;
  //   箭头函数的this指向再debounce
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
}

function throttle(fn, delay) {
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      flag = false;
      fn.apply(this, args);
    }, delay);
  };
}
