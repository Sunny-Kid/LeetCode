/**
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

示例 :

输入: [1,2,1,3,2,5]
输出: [3,5]
注意：

结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let sign = 0;
  for (let i = 0; i < nums.length; i++) {
    sign ^= nums[i];
  }

  sign &= -sign;
  const res = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & sign) === sign) {
      res[0] ^= nums[i];
    } else {
      res[1] ^= nums[i];
    }
  }
  return res;
};
