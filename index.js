let num = '266219';

let arr = num.toString().split('');
const reducer = (a, b) => a*b;

let mult = arr.reduce(reducer);
console.log(mult);

let mult2 = (mult **3 ).toString().split('');
console.log(mult2[0] + mult2[1]);