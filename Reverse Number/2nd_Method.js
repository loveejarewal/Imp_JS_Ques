// converting the number to string


let result = 0;
let number = 78945;
result = Number(String(number).split('').reverse().join(''));
console.log('Reversed Number is :'+ result)