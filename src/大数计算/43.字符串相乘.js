/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 被乘数是 num1，乘数是 num2
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let ans = '0';
  const m = num1.length;
  const n = num2.length;
  for (let i = n - 1; i >= 0; i--) {
    const curr = [];
    let add = 0;
    // 乘数中除了最低位，其余的位数要进行补位
    for (let j = n - 1; j > i; j--) {
      curr.push(0);
    }
    const y = Number(num2.charAt(i));
    for (let j = m - 1; j >= 0; j--) {
      const x = Number(num1.charAt(j));
      const product = x * y + add;
      curr.push(product % 10);
      add = product / 10;
    }
    if (add != 0) {
      curr.push(add % 10);
    }
    ans = addStrings(ans, curr.reverse().toString());
  }
  return ans;
};
