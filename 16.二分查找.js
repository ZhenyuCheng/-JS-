/**
 * @note 如何确定一个数在一个有序数组中的位置
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 19:46:05
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 19:54:38
 */

function search(arr, target) {
  let start = 0,
    end = arr.length -1;
    while(start <= end) {
        let mid = Math.floor((start + end) /2);
        if(arr[mid] === target) return mid;
        if(arr[mid] > target) {
            end = mid -1; // 注意不是直接用mid，mid已经判断过了
        } else {
            start = mid +1; // 注意不是直接用mid
        }
        // console.log(start, end)
    }
    return -1;
}


console.log(search([0,1,2,3,4,5,6,7,8,9], 0))
console.log(search([0,1,2,3,4,5,6,7,8,9], 1))
console.log(search([0,1,2,3,4,5,6,7,8,9], 2))
console.log(search([0,1,2,3,4,5,6,7,8,9], 3))
console.log(search([0,1,2,3,4,5,6,7,8,9], 4))
console.log(search([0,1,2,3,4,5,6,7,8,9], 5))
console.log(search([0,1,2,3,4,5,6,7,8,9], 6))
console.log(search([0,1,2,3,4,5,6,7,8,9], 7))
console.log(search([0,1,2,3,4,5,6,7,8,9], 8))
console.log(search([0,1,2,3,4,5,6,7,8,9], 9))
console.log(search([0,1,2,3,4,5,6,7,8,9], 10))
