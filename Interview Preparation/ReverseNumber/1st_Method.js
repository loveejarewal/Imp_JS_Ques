//  there are many methods to solve this problem 
//  1. using loopg, 2. using arrow function, 3. converting number to string, 4.using regular function


//  using loops 
let number = 78945;


// initiaizing the result variable 
let result = 0;
while(number>0){
    rightmost = number%10;
    result = result*10 +rightmost;
    // removing the rightmost digit from the number 
    number = Math.floor(number/10);

}
console.log("Reversed number is :" + result )