/**
  Say you have an array prices for which the ith element is the price of a given stock on day i.

  Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before y
 */

function maxProfit(prices) {
  if (!prices || !prices.length) return 0;

  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const next = prices[i + 1];
    const curr = prices[i];
    if (next > curr) profit += next - curr
  }

  return profit;
}