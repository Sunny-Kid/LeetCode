/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

示例 2:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 当天的最大收益 = max(当天卖出：当天价格 - 过去几天最小价格，当天不卖：过去几天的最大收益)
 */
var maxProfit = function(prices) {
  let n = prices.length;
  if (!n || n === 1) return 0;

  // 最大收益
  let prevMax = 0;
  // 最小价格
  let prevMin = prices[0];

  for (let i = 1; i < n; i++) {
    let price = prices[i];

    prevMax = Math.max(price - prevMin, prevMax);
    prevMin = Math.min(price, prevMin);
  }

  return prevMax;
};
