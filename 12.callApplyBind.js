/**
 * @note 实现call，apply，bind
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-27 19:41:11
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-28 14:12:24
 */
Object.prototype.myCall = function(context, ...args) {
    // let obj = {};
    context.fn = this || window;
    let ans = context.fn(...args);
    delete context.fn;
    return ans;
}