/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum3 = function (nums) {
  let res = [];
  let length = nums.length;
  nums.sort((a, b) => a - b); // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) {
    // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1;
      let last = length - 1;
      do {
        if (first >= last || nums[i] * nums[last] > 0) break; // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last];
        if (result === 0) {
          // 如果可以组队
          res.push([nums[i], nums[first], nums[last]]);
        }
        if (result <= 0) {
          // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) { } // 如果相等就跳过
        } else {
          // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) { }
        }
      } while (first < last);
      while (nums[i] === nums[++i]) { }
    }
  }
  return res;
};

var threeSum3 = function (nums) {
  let res = [];
  let length = nums.length;
  if (length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    const difference = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === difference) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[left] + nums[right] < difference) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
