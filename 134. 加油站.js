/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let rest = 0;
    let minRest = Infinity;
    let index = 0;
    for (let i = 0; i < gas.length; i++) {
        rest += gas[i] - cost[i];
        if (rest < minRest) {
            minRest = rest;
            index = (i + 1) % gas.length;
        }
    }
    return rest >= 0 ? index : -1;
};