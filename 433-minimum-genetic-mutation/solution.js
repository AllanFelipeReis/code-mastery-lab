/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    if (!bank.includes(endGene))
        return -1;

    const bankSet = new Set(bank);
    const queue = [[startGene, 0]];

    while (queue.length > 0) {
        [current, mutations] = queue.shift();

        if (current === endGene)
            return mutations;

        for (let i = 0; i < current.length; i++) {
            for(let char of "ACGT") {
                const mutation = current.slice(0, i) + char + current.slice(i + 1);
                
                if(bankSet.has(mutation)) {
                    queue.push([mutation, mutations + 1]);
                    bankSet.delete(mutation);
                }
            }
        }
    }

    return -1;
};

console.log(minMutation("AACCGGTT", "AACCGGTA",["AACCGGTA"]))