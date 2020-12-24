/**
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]

说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const nums1Map = makeCountMap(nums1);
  const nums2Map = makeCountMap(nums2);
  let res = [];
  for (let key of nums1Map.keys()) {
    const count1 = nums1Map.get(key);
    const count2 = nums2Map.get(key);
    if (count2) {
      const min = Math.min(count1, count2);
      for (let i = 0; i < min; i++) {
        res.push(key);
      }
    }
  }
  return res;
};

function makeCountMap(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]);
    if (count) {
      map.set(nums[i], ++count);
    } else {
      map.set(nums[i], 1);
    }
  }
  return map;
}
