/**
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
 

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

进阶：

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 */

var intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const map = {};
  for (let num of nums1) {
    map[num] = map[num] || 0;
    map[num]++;
  }

  const intersection = [];
  for (let num of nums2) {
    // map[num]不能为 0，因为可能存在重复元素
    if (map[num]) {
      intersection.push(num);
      map[num]--;
    }
  }

  return intersection;
};

var intersect2 = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const intersection = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      intersection.push(nums1[i]);
      i++;
      j++;
    }
  }
  return intersection;
};
