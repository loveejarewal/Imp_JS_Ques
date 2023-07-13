//  using loops and if condition both are used 
let result;
const number1 = prompt('Enter a first number: ');
const number2 = prompt('Enter a second number: ');


for (let i = 1; i <= number1 && i <= number2; i++) {

    if( number1 % i == 0 && number2 % i == 0) {
        result  = i;
    }
}

console.log(`HCF of ${number1} and ${number2} is ${result}.`);