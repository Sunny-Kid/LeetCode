// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。

// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。

// 你可以返回 任何满足上述条件的数组作为答案 。

// 示例 1：

// 输入：nums = [4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
// 示例 2：

// 输入：nums = [2,3]
// 输出：[2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  const n = nums.length;
  const ans = new Array(n);
  let i = 0;
  for (const x of nums) {
    if (!(x & 1)) {
      ans[i] = x;
      i += 2;
    }
  }

  i = 1;
  for (const x of nums) {
    if (x & 1) {
      ans[i] = x;
      i += 2;
    }
  }

  return ans;
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var sortArrayByParityII = function(nums) {
  const n = nums.length;
  let j = 1;
  for (let i = 0; i < n; i += 2) {
    if (nums[i] & 1) {
      while (nums[j] & 1) {
        j += 2;
      }
      swap(nums, i, j);
    }
  }
  return nums;
};
