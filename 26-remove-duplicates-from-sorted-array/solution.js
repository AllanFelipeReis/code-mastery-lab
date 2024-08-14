const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
}

const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(nums);
console.log(result); // Deve imprimir 5
console.log(nums.slice(0, result)); // Deve imprimir [1, 2, 3, 4, 5]
