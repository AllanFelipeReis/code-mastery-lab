/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var magazineLetters = {};

    for(var i = 0; i < magazine.length; i++) {
        var letter = magazine.charAt(i)
        if(magazineLetters[letter] === undefined) {
            magazineLetters[letter] = 1;
        }
        else {
            magazineLetters[letter]++
        }
    }

    for(var i = 0; i < ransomNote.length; i++) {
        var r = ransomNote.charAt(i);

        if(magazineLetters[r] === undefined) return false

        var currentCount = magazineLetters[r]

        if(currentCount === 0) return false

        magazineLetters[r]--
    }

    return true;
};

console.log(canConstruct("allanreis", "laranjaromarosareinadolindo"))