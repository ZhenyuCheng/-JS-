// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
// 示例： 输入：s = 8, nums = [2,3,1,2,4,3]  //

// 输出：2

// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 滑动窗口，dp解法有点问题
function getArr(arr, s) {
    let left = 0,
      right = 0;
    let len = arr.length;
    let sum = 0;
    let min = Infinity;
    let flag = false;
    while (right < len && left <= right) {
      if (right === left) {
        if (arr[right] > s) {
          return 1;
        } else {
          sum = arr[left];
          right++;
          flag = false;
        }
      } else {
        if (!flag) {
          sum = sum + arr[right];
        }
        if (sum < s) {
          right++;
          flag = false;
        } else {
          let temp = right - left + 1;
          min = temp < min ? temp : min;
          sum = sum - arr[left];
          flag = true;
          left++;
        }
      }
      //
    }
    return min;
  }
  
  console.log(getArr([2, 3, 1, 2, 4, 3], 7));