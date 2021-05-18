function nextBigger(number) {

    let num = number.toString().split('');

    for (let i = num.length - 1; i > 0; i--) {

        if (num[i] > num[i - 1]) {
            [num[i], num[i - 1]] = [num[i - 1], num[i]];
            num = [...num.slice(0, i), ...num.slice(i, num.length).sort((a, b) => a - b)];
            return +num.join('');
        }
    }
    return '-1';
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(531))