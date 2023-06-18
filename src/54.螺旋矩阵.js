// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const result = [];
  const row = matrix.length;
  const column = matrix[0].length;

  let left = 0;
  let right = column - 1;
  let top = 0;
  let bottom = row - 1;

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        result.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        result.push(matrix[row][left]);
      }
    }
    [left, top, right, bottom] = [left + 1, top + 1, right - 1, bottom - 1];
  }

  return result;
};
