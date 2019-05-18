// Given an integer, write a function to determine if it is a power of three.

// Example 1:
// Input: 27
// Output: true
// Example 2:
// Input: 0
// Output: false
// Example 3:
// Input: 9
// Output: true
// Example 4:
// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

function isPowerOfThree(n) {
  if (n < 1) return false;

  while (n >= 1) {
    if (n === 1) {
      return true;
    } else if (n % 3 !== 0) {
      return false;
    }

    n = n / 3;
    console.log(n);
  }
}

// *-------------*
// Analysis:
// *-------------*
// Time complexity = O(n)
// Space complexity = O(1)

// *-------------*
//   TEST CASES
// *-------------*
console.log(isPowerOfThree(27));
