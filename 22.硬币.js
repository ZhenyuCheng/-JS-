/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1
 * 
    示例1：
    输入: coins = [1, 2, 5], amount = 11
    输出: 3
    解释: 11 = 5 + 5 + 1

    示例2：
    输入: coins = [2], amount = 3
    输出: -1
 */

function coinChange(coins, amount) {
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = dp[i - coins[j]] + 1;
        min = Math.min(min, dp[i]);
      }
    }
    dp[i] = min;
    // dp[i] = min === Infinity ? -1 : min; // 在这里判断会有问题，导致 dp[i - coins[j]]值为-1影响dp[i]的值

  }
  // console.log(dp)
  dp[amount] = dp[amount] === Infinity ? -1 : dp[amount];

  return dp[amount];
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3));
