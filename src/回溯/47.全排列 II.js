/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

示例 2：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

提示：
1 <= nums.length <= 8
-10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const path = [];
  nums.sort((a, b) => a - b);

  function backtracking(used) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    // 横向遍历
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
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
