/**
 * 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums == undefined) return 0;
  let res = nums[0];
  let curMin = nums[0];
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const curMaxTmp = curMax * num;
    const curMinTmp = curMin * num;
    curMax = Math.max(curMaxTmp, curMinTmp, num);
    curMin = Math.min(curMaxTmp, curMinTmp, num);
    res = Math.max(res, curMax);
  }
  return res;
};
