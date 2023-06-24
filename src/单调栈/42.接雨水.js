/** 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1: 

输入: height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
解释: 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2: 

输入: height = [4,2,0,3,2,5]
输出: 9

提示: 
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  const n = height.length;
  if (n === 0) {
    return 0;
  }

  const leftArr = new Array(n).fill(0);
  leftArr[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftArr[i] = Math.max(leftArr[i - 1], height[i]);
  }
  const rightArr = new Array(n).fill(0);
  rightArr[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightArr[i] = Math.max(rightArr[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.min(leftArr[i], rightArr[i]) - height[i];
  }

  return ans;
};
