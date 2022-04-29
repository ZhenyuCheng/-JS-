/**
 * @note
 * @author czy233983@alibaba-inc.com
 * @date 2021-07-21 20:38:31
 * @Last Modified by: czy233983@alibaba-inc.com
 * @Last Modified time: 2021-07-21 20:45:40
 */

//  题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
//  现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

function largeThan(a, b) {
  let arrA = a.split(".");
  let arrB = b.split(".");
  for (let i = 0; i < a.length || i < b.length; i++) {
    if (arrA[i] > arrB[i]) return true;
    if (arrA[i] < arrB[i]) return false;
  }

  if (i === a.length) {
    return false;
  } else {
    return true;
  }
}

function sort(arr) {
  return arr.sort((a, b) => {
    return largeThan(a, b) ? -1 : 1;
  });
}

console.log(sort(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']))
