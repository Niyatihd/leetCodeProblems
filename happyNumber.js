// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers
// for which this process ends in 1 are happy numbers.


const numToDigits = function (n) { //n = 48
  let num = n;
  let digits = [];

  if (num < 1) return digits;

  while (num) {
    if (num < 10) {
      digits.push(num);
      return digits;
    }

    let singleDigit = num % 10;
    digits.push(singleDigit);
    num = (num - singleDigit) / 10;
  }
};

// const numToDigits = function (n) { //n = 48
//   let num = n;
//   let digits = [];

//   if (num < 10) {
//     digits.push(num);
//     return digits;
//   }

//   while (num > 9) {
//     let singleDigit = num % 10;
//     digits.push(singleDigit);
//     num = (num - singleDigit) / 10;

//     if (num < 10) {
//       digits.push(num);
//       return digits;
//     }
//   }
// }

console.log(numToDigits(0));
console.log(numToDigits(4));
console.log(numToDigits(45));
console.log(numToDigits(44545));

const isHappy = function (n) {
  let num = n;
  let seen = new Set();

  if (num < 1) return false;

  while (num) {
    seen.add(num);
    let digits = numToDigits(num);
    let squaredSum = 0;

    digits.forEach((digit) => {
      squaredSum += digit * digit;
    });

    num = squaredSum;
    if (num === 1) {
      return true;
    } else if (seen.has(num)) {
      return false;
    }
  }
};

// *-------------*
// Analysis: 
// *-------------*
// Time complexity = O(n)
// Space complexity = O(n)

// *-------------*
//   TEST CASES
// *-------------*
console.log(isHappy(49)); // 16 + 81 = 97, 81 + 49 = 130, 1 + 9 + 0 = 10
console.log(isHappy(4));
console.log(isHappy(0));
console.log(isHappy(49776));