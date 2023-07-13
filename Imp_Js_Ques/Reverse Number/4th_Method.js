// using regular function

function reverseNumber(num){
    return(
        parseFloat(
        num.toString().split('').reverse().join('')
    )* Math.sign(num)
    )
}
console.log(reverseNumber(789456))