/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const generateOneByOne = (sublist, left, right) => {
    // 右括号可组合的数量已经少于左括号，那么这个时候应该要终止递归回到上一层继续先进行左括号的拼接
    if (left > right) return;
    if (left === 0 && right === 0) {
      res.push(sublist);
    }
    if (left > 0) generateOneByOne(sublist + '(', left - 1, right);
    if (right > 0) generateOneByOne(sublist + ')', left, right - 1);
  }
  generateOneByOne('', n, n);
  return res;
};

console.log(generateParenthesis(3));
