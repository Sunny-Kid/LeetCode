/**
 * 有一个背包，他的容量为C(Capacity)
 * 现在有n中不同的物品，编号为0…n-1，其中每一件物品的重量为w(i)，价值为v(i)
 * 问可以向这个背包中盛放哪些物品，使得在不超过背包容量的基础上，物品的总价值最大。
 */

/**
 *
 * @param {Array<number>} weights
 * @param {Array<number>} values
 * @param {number} capacity
 */

function knapsack(weights, values, capacity) {
  if (capacity === 0) return 0;
  const dp = [];
  dp[0] = [];
  for (let j = 0; j <= capacity; j++) {
    dp[0][j] = j >= weights[0] ? values[0] : 0;
  }
  for (let i = 1; i < weights.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      // 0~i这些物品容积为j的背包获得的最大值
      dp[i][j] = dp[i - 1][j];
      if (j >= weights[i]) {
        dp[i][j] = Math.max(dp[i][j], values[i] + dp[i - 1][j - weights[i]]);
      }
    }
  }
  console.log(123);
  return dp[weights.length - 1][capacity];
}
