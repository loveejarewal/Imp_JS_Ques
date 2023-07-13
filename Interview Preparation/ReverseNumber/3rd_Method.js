// using arrow function

const reverseNumber = number => parseFloat(number.toString().split('').reverse().join(''))* Math.sign(number);
console.log(reverseNumber(78945))
