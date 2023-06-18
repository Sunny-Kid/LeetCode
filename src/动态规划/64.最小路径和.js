/**
 * 
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
 */

dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1] + arr[i][j]);

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  if (m <= 0 || n <= 0) {
    return 0;
  }
  let dp = [[]];
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i] = dp[i] ?? [];
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  // 推导出 dp[m-1][n-1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};
