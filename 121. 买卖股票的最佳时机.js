/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let out = 0;
    let minValue = prices[0];
    for (let i = 0; i < prices.length; i++) {
        out = Math.max(out, prices[i] - minValue);
        minValue = Math.min(prices[i], minValue);
    }
    return out;
};