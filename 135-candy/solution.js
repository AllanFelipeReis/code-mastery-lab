/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const ratingsCount = ratings.length;
    const candies = new Array(ratingsCount).fill(1);

    for (let i = 1; i < ratingsCount; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = ratingsCount - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    return candies.reduce((a, b) => a + b, 0);
};
