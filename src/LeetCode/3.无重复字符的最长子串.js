/**
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

var lengthOfLongestSubstring = function(str) {
  // 建立滑动窗口
  let left = 0;
  let right = -1;
  let res = 0;
  const freq = {};
  while (left < str.length) {
    if (right + 1 < str.length && !freq[str[right + 1]]) {
      freq[str[right + 1]] = true;
      right++;
    } else {
      freq[str[right + 1]] = false;
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
lengthOfLongestSubstring('pwwkew');
