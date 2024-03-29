/**
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;
  let left = 0;
  let right = x;
  let res;
  while (left <= right) {
    const middle = parseInt((left + right) / 2);
    if (middle === x / middle) {
      return middle;
    } else if (middle > x / middle) {
      right = middle - 1;
    } else {
      left = middle + 1;
      res = middle;
    }
  }
  return res;
};

var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;
  let r = x;
  while (r * r > x) {
    r = parseInt((r + x / r) / 2);
  }
  return r;
};
