/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    var res = 0;
    var l = r = 0;

    while (r < nums.length - 1) {
        farthest = 0
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i])
        }

        l = r + 1;
        r = farthest;
        res++;
    }

    return res;
};

console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 1, 1, 4, 5, 6]))