/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j, rows, cols, grid);
        count++;
      }
    }
  }
  return count;
};

var dfs = function(i, j, rows, cols, grid) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') return;
  grid[i][j] = '0';
  dfs(i - 1, j, rows, cols, grid);
  dfs(i, j - 1, rows, cols, grid);
  dfs(i + 1, j, rows, cols, grid);
  dfs(i, j + 1, rows, cols, grid);
};
