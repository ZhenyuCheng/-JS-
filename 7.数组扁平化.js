/**
 * @note 数据扁平化
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 14:34:45
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 14:53:05
 */

// 递归
function flatter1(arr) {
    if(!Array.isArray(arr) || !arr.length) return [arr];
    return arr.reduce((pre, cur) => {
        return [...pre, ...flatter1(cur)];
    }, [])
}

console.log(flatter1([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

// 循环
function flatter2(arr) {
    if(!arr.length) return []
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatter2([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
