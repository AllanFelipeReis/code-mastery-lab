const fizzBuzz = (n) => {
    var answer = [];
    for (let index = 1; index <= n; index++) {
        const divisibleBy3 = index % 3 == 0;
        const divisibleBy5 = index % 5 == 0;
        let currStr = '';

        if (divisibleBy3) {
            currStr += "Fizz";
        }
        if (divisibleBy5) {
            currStr += "Buzz";
        }
        if(currStr == "") {
            currStr += index
        }

        answer.push(currStr)
    }
    return answer;
}
