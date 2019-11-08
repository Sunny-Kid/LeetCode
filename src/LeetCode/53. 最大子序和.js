/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 前缀和
var maxSubArray = function(nums) {
  let max = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(sum, max);
    }
  }
  return max;
};

// 动态规划
var maxSubArray = function(nums) {
  const length = nums.length;
  let max = nums[0];
  for (let i = 1; i < length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    max = Math.max(nums[i], max);
  }
  return max;
};

// 分治法
function helper(list, m, n) {
  if (m === n) return list[m];
  let sum = 0;
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid);
  const r = helper(list, mid + 1, n);
  for (let i = mid; i >= m; i--) {
    sum += list[i];
    if (sum > lmax) lmax = sum;
  }

  sum = 0;

  for (let i = mid + 1; i <= n; i++) {
    sum += list[i];
    if (sum > rmax) rmax = sum;
  }

  return Math.max(l, r, lmax + rmax);
}

var maxSubArray = function(nums) {
  return helper(nums, 0, nums.length - 1);
};
