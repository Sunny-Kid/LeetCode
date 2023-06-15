/**
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

var lengthOfLongestSubstring = function (str) {
  // 建立滑动窗口
  if (str.length === 0) return 0;
  const map = {};
  let max = 0;
  let left = 0;
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] !== undefined) {
      left = Math.max(left, map[str[i]] + 1);
    }
    map[str[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  return max;
};
