//Итерация
function sumToIter(n) { 
    let sum = 0;

    for (let i = 1; i <= n; ++i) {
        sum += i;
    }

    return sum;
 }

//Рекурсия 
function sumToRec(n) {

    if (n == 1) {
        return n;
    } else {
        return (n + sumToRec(n - 1));
    }
}

//Формула
function sumToForm(n) {
    return ((1 + n) * n / 2);
}

console.log(sumToIter(5));
console.log(sumToRec(5));
console.log(sumToForm(5));

