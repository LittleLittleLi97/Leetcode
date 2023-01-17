/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let out = 0;
    let now = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > now) {
            out += prices[i] - now;
        }
        now = prices[i];
    }
    
    return out;
};
// 动态规划稍微改改，实际上写的复杂了
var maxProfit = function(prices) {
    let out = 0;
    const dp = new Array(prices.length).fill(0);
    dp[dp.length - 1] = prices[dp.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        if (prices[i] > dp[i + 1]) {
            dp[i] = prices[i];
        } else {
            dp[i] = prices[i];
            out += dp[i + 1] - dp[i];
        }
    }
    return out;
};