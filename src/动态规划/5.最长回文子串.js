/** 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 1; // 最长长度
  let longestBegin = 0; // 当最长长度更新时同时缓存起始点
  const stringLength = s.length;
  let dp = []; // 缓存结果

  // 长度 1 2 单独处理
  for (let i = 0; i < stringLength; i++) {
    if (dp[i] === undefined) {
      dp[i] = []; // 初始化二维数组
    }
    dp[i][i] = true; // 自己是自己的回文
    // 找出长度为2的回文
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true; // 缓存结果
      longestBegin = i;
      maxLen = 2; // 比如两个连续的 aa 也是回文，并且标记最长长度
    }
  }
  // 动态规划 找最优子，比如 aa 是回文，那么 baab 只需要判断 b === b && （aa: 缓存的结果）
  // L 为子串长度，首先找出长度为3的回文，然后是4，5...
  // 同时通过 L 计算 子串终点 i+L-1，起始点+长度-1 = 终点
  for (let L = 3; L <= stringLength; L++) {
    for (let i = 0; i + L - 1 < stringLength; i++) {
      // 越往后便利次数越少 当L是16的时候 只遍历1次 判断s[0]s[15]是否相等
      let j = i + L - 1; // 第一次对比的是 s[0] === s[2]
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        // 两头相等 并且 子是回文
        dp[i][j] = true;
        longestBegin = i;
        maxLen = L; // 因为L是从小到大遍历的 所以后面的回文长度就是最长的
      }
    }
  }
  return s.slice(longestBegin, longestBegin + maxLen);
};
