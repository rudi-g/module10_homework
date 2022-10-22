const numbers = [4,3,4,4];
let ifNumbersEqual = numbers.every((el, index, arr) => {
    return el === arr[0];
})

console.log(ifNumbersEqual);
