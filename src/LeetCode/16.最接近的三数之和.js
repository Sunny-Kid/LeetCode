/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const n = nums.length;
  if (n <= 3) return getSum(nums);
  // 先升序排序 此为解题的前置条件
  nums.sort((a, b) => a - b);
  let min = Infinity; // 和 target 的最小差
  let res;
  // 从左往右依次尝试定一个基础指针 右边至少再保留两位 否则无法凑成3个
  for (let i = 0; i <= nums.length - 3; i++) {
    const base = nums[i];
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = base + nums[left] + nums[right]; // 三数求和
      // 更新最小差
      let diff = Math.abs(sum - target);
      if (diff < min) {
        min = diff;
        res = sum;
      }
      if (sum < target) {
        // 求出的和如果小于目标值的话 可以尝试把左指针右移 扩大值
        left++;
      } else if (sum > target) {
        // 反之则右指针左移
        right--;
      } else {
        // 相等的话 差就为0 一定是答案
        return sum;
      }
    }
  }
  return res;
};

const getSum = nums => nums.reduce((prev, curr) => prev + curr, 0);
