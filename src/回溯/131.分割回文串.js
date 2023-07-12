/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。

示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

示例 2：
输入：s = "a"
输出：[["a"]]

提示：
1 <= s.length <= 16
s 仅由小写英文字母组成
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

var partition = function (s) {
  const res = [], path = [], len = s.length;
  backtracking(0);
  return res;
  function backtracking(startIndex) {
    if (startIndex >= len) {
      res.push(Array.from(path));
      return;
    }
    for (let i = startIndex; i < len; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;
      path.push(s.slice(startIndex, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  }
};
