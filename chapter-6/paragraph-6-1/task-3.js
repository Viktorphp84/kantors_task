function fib(n) {
    let el1 = 1;
    let el2 = 1;

    function subFib(n) {
        let temp = el2;
        el2 = el1 + el2;
        el1 = temp;
        if (n == 3) {
            return el2;
        } else {
            return subFib(n - 1);
        }
    }

    return subFib(n);
}

console.log(fib(7));