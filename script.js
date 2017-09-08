function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function factorial(num) {
    var ans = 1;
    if (num === 0) {
        return 1;
    }
    while (num !== 0) {
        ans *= num;
        --num;
    }
    return ans;
}

function kebabToSnake(kebabCase) {
    var snakeCase = kebabCase.replace(/-/g, "_");
    return snakeCase;
}
