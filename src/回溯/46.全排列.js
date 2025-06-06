/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：
输入：nums = [1]
输出：[[1]]
 
提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const path = [];

  function backtracking(used) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    // 横向遍历
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true; // 同支
      path.push(nums[i]);
      backtracking(used); // 纵向遍历
      path.pop();
      used[i] = false;
    }
  }
  backtracking([]);
  return res;
};
