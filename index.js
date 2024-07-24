// let a = 10;
// let b = 12;
// let c = a+b;
// console.log(c);

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(var i = 10; i >= 0; i--){
//     console.log(i)
// }

/*
Q1. Sum of all the Natural Numbers from 1 to n
-> sum of 1 to 5: 1+2+3+4+5=>15
*/
// function sumOfNaturalNumber(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum = sum + i;
//     }
//     return sum;
    
//     // return num * (num + 1)/2;
// }
// console.log(sumOfNaturalNumber(5));


/*
Q2. Sum of digits of a numbers
-> 1287 => 1+2+8+7=18
-> 1287%10: remainder=128, Q=7 => 128%10: r=12, q=8 =>12%10: r=2, q=1
Solution:
*/
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num += Math.floor(num/10)
    }
    return sum;
}
console.log(sumOfDigits(1287));
