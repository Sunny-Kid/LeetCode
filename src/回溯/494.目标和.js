// 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

// 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

// 示例：

// 输入：nums: [1, 1, 1, 1, 1], S: 3
// 输出：5
// 解释：

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 一共有5种方法让最终目标和为3。

// 提示：

// 数组非空，且长度不会超过 20 。
// 初始的数组的和不会超过 1000 。
// 保证返回的最终结果能被 32 位整数存下。

var findTargetSumWays = function(nums, target) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  if (total > target) return 0;
  if ((total + target) % 2) return 0;
  const positiveSum = (total + target) / 2;
  const path = [];
  const res = [];
  const backtrack = (startIndex, sum) => {
    if (sum === positiveSum) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (sum + nums[i] > target) break;
      sum += nums[i];
      path.push(nums[i]);
      backtrack(startIndex + 1, sum);
      sum -= nums[i];
      path.pop();
    }
  };
  backtrack(0, 0);
  return res.length;
};
