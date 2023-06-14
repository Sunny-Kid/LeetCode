/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const list = [];
  // 还是先排序，主要是方便去重
  backtrack(list, [], candidates.sort((a, b) => a - b), target, 0);
  return list;
};

function backtrack(list, tempList, nums, remain, start) {
  if (remain < 0) return;
  if (remain === 0) return list.push([...tempList]);
  for (let i = start; i < nums.length; i++) {
    // 如果存在重复的元素，前一个元素已经遍历了后一个元素与之后元素组合的所有可能
    if (i > start && nums[i] === nums[i - 1]) continue;
    tempList.push(nums[i]);
    // i + 1代表不可以重复利用， i 代表数字可以重复使用
    backtrack(list, tempList, nums, remain - nums[i], i + 1);
    tempList.pop();
  }
}
