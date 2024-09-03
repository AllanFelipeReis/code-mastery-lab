/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globalMax = nums[0];
    let globalMin = nums[0];
    let currentMax = 0;
    let currentMin = 0;
    let total = 0;

    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];

        currentMax = Math.max(currentMax + n, n);
        currentMin = Math.min(currentMin + n, n);

        total += n;

        globalMax = Math.max(globalMax, currentMax);
        globalMin = Math.min(globalMin, currentMin);
    }

    return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
};

console.log(maxSubarraySumCircular([5,-3,5]));