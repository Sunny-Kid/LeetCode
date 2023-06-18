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
var combinationSum2 = function(candidates, target) {
  let res = [];
  let path = [];
  let total = 0;
  const len = candidates.length;
  candidates.sort((a, b) => a - b);
  let used = new Array(len).fill(false);
  const backtracking = startIndex => {
    if (total === target) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < len && total < target; i++) {
      const cur = candidates[i];
      if (cur > target - total || (i > 0 && cur === candidates[i - 1] && !used[i - 1])) continue;
      path.push(cur);
      total += cur;
      used[i] = true;
      // 进入下一层递归，去下一个数
      backtracking(i + 1);
      path.pop();
      total -= cur;
      used[i] = false;
    }
  };
  backtracking(0);
  return res;
};
