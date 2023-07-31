/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    // 相当于最左面一列，机器人只能一直往下走
    dp[i] = [1];
  }
  for (let i = 0; i < n; i++) {
    // 相当于最上面一行，机器人只能一直往右走
    dp[0][i] = 1;
  }
  // 推导出 dp[m-1][n-1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1];
};
