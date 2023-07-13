
let number1 = prompt('Enter a first number: ');
let number2 = prompt('Enter a second number: ');

while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }a
}

console.log(`HCF is ${number1}`);