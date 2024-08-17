const numberOfSteps = (num) => {
    var steps = 0;

    while (num > 0) {
        // Before we used num % 2
        if ((num & 1) == 0) {
            // Before we used num /= 2
            num >>= 1
        } else {
            num--
        }

        steps++
    }

    return steps
}