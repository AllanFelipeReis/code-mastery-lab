/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    if (sum(gas) < sum(cost)) return -1;

    let total = 0, res = 0;

    for (let i = 0; i < gas.length; i++) {
        total += (gas[i] - cost[i]);

        if (total < 0) {
            total = 0;
            res = i + 1;
        }
    }

    return res;
};

var sum = function (arr) {
    return arr.reduce((a, b) => a + b, 0);
};

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));