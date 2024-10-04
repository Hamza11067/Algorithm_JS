// 19 - Find the largest number in an array and how many times it occured
// let arr = [4, 4, 1, 3];
// let count = 0;
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
//   if (largest == arr[i]) {
//     count++;
//   }
// }
// console.log(largest, count);
// -----------------------------------------------------------------------------------------

// 18 - Find union of two arrays
// function union(a, b) {
//   let c = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         c.push(a[i]);
//       }
//     }
//   }
//   return c;
// }
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// console.log(intersection(a, b));

// -----------------------------------------------------------------------------------------

// 17 - Find Intersection of two arrays
// function intersection(a, b) {
//   let c = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         c.push(a[i]);
//       }
//     }
//   }
//   return c;
// }
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// console.log(intersection(a, b));

// -----------------------------------------------------------------------------------------

// 16 - Find leap years upto next 20 years
// function findNextLeapYears(n) {
//   let currentYear = new Date().getFullYear();
//   let leapYears = [];
//   for (let i = currentYear + 1; i <= currentYear + n; i++) {
//     if (i % 4 == 0) {
//       leapYears.push(i);
//     }
//   }
//   console.log(leapYears);
// }

// console.log(findNextLeapYears(20));

// -----------------------------------------------------------------------------------------

// 15 - You have an array, find minimum sum of the numbers (one less than total numbers) and the maximun
// function minmaxSum(array) {
//   let minSum = 0;
//   let maxSum = 0;
//   let arr = array.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (i != 0) {
//       maxSum += arr[i];
//     }
//     if (i != arr.length - 1) {
//       minSum += arr[i];
//     }
//   }
//   console.log(minSum, maxSum);
// }

// // console.log(minmaxSum([1, 3, 5, 7, 9]));
// console.log(minmaxSum([7, 69, 2, 221, 8974]));
// -----------------------------------------------------------------------------------------

// 14 - Make a staircase upto  the given number using '#' and blank spaces ' '
// function makeStaircase(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let index = 0; index < n - i; index++) {
//       str = str + " ";
//     }

//     for (let j = 0; j < i; j++) {
//       str = str + "#";
//     }
//     if(n != i) {
//         str += "\n";
//     }
//   }

//   console.log(str);
// }

// makeStaircase(6);
// -----------------------------------------------------------------------------------------

// 13 - Calculate ratio of elements that are positive, negative and zero in an array of integers
// let arr = [2, 4, -1, 0, 5, -3];

// function integersRatio(arr) {
//   let positiveIntegers = 0;
//   let negativeIntegers = 0;
//   let zeroIntegers = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positiveIntegers++;
//     } else if (arr[i] < 0) {
//       negativeIntegers++;
//     } else {
//       zeroIntegers++;
//     }
//   }

//   let positiveRatio = (positiveIntegers / arr.length).toFixed(6);
//   let negativeRatio = (negativeIntegers / arr.length).toFixed(6);
//   let zeroRatio = (zeroIntegers / arr.length).toFixed(6);

//   console.log(positiveRatio);
//   console.log(negativeRatio);
//   console.log(zeroRatio);
// }

// console.log(integersRatio(arr));

// -----------------------------------------------------------------------------------------

// 12 - Find the Diagonal difference of a square matrix

// let matrix = [
//   [1, 2, 9],
//   [4, 5, 6],
//   [6, 7, 9],
// ];

// function diagonalDifference(matrix) {
//   let primarySum = 0;
//   let secondarySum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     primarySum += matrix[i][i];
//     secondarySum += matrix[i][matrix.length - 1 - i];
//   }
//   // return primarySum - secondarySum;
//   return Math.abs(primarySum - secondarySum);
// }

// console.log(diagonalDifference(matrix));

// // -----------------------------------------------------------------------------------------

// 1 - find sum of all the elements of the array and return an integer

// let arr = [1, 3, 4, 6, 8, 9];
// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(sum(arr));

// -----------------------------------------------------------------------------------------

// 2 - find the index of the target element in an array using binary search

// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     // Check if the target is at the mid position
//     if (arr[mid] === target) {
//       return mid;
//     }
//     // If target is greater, ignore the left half
//     else if (arr[mid] < target) {
//       start = mid + 1;
//     }
//     // If target is smaller, ignore the right half
//     else {
//       end = mid - 1;
//     }
//   }

//   // If target is not found, return -1
//   return -1;
// }

// let arr = [1, 3, 4, 6, 8, 9];
// let target = 8;
// let result = binarySearch(arr, target);

// if (result !== -1) {
//   console.log(`Element found at index ${result}`);
// } else {
//   console.log("Element not found");
// }

// -----------------------------------------------------------------------------------------

// 3- Find the largest element of an array

// let arr = [1, 3, 4, 6, 8, 9, 11];

// function largestNum(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i]) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// console.log(largestNum(arr));

// -----------------------------------------------------------------------------------------

// 4 - Sort an array in ascending order
// let arr = [5, 3, 0, 7, 2, 6];
// function sort(arr) {
//   arr.sort();
//   return arr;
// }

// console.log(sort(arr));

// -----------------------------------------------------------------------------------------

// 5 - Find median of a sorted array

// let arr = [1, 3, 4, 6, 8, 9];

// function findMedian(arr) {
//   const mid = Math.floor(arr.length / 2);

//   // Step 1: If the array has an odd length, return the middle element
//   if (arr.length % 2 !== 0) {
//     return arr[mid];
//   }
//   // Step 2: If the array has an even length, return the average of the two middle elements
//   else {
//     return (arr[mid - 1] + arr[mid]) / 2;
//   }
// }

// console.log(findMedian(arr)); // Output: 5

// -----------------------------------------------------------------------------------------

// 6 - Merge two arrays and find the  number that occurs more than n/2 times

// function mergeAndFindMajority(arr1, arr2) {
//   // Step 1: Merge the two arrays
//   const mergedArray = [...arr1, ...arr2];

//   // Step 2: Count occurrences
//   const countMap = {};
//   const threshold = mergedArray.length / 2;

//   for (let num of mergedArray) {
//     countMap[num] = (countMap[num] || 0) + 1;

//     // Step 3: Check if the current number exceeds the threshold
//     if (countMap[num] > threshold) {
//       return num; // Return the number if it occurs more than n/2 times
//     }
//   }

//   return null; // If no number exceeds n/2, return null
// }

// // Example usage:
// let arr1 = [1, 3];
// let arr2 = [3];

// console.log(mergeAndFindMajority(arr1, arr2)); // Output: 3

// -----------------------------------------------------------------------------------------

// 7 - Comparing Elements of two arrays
//      you have two arrays a and b both have equal number of elements
//      you have to compare elements of both arrays at corresponding index
//      and find out which array has large numbers than others and how many

// let a = [3, 5, 7, 4];
// let b = [2, 6, 7, 9];

// function compare(a, b) {
//   let pointsA = 0;
//   let pointsB = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       pointsA++;
//     }
//     if (a[i] < b[i]) {
//       pointsB++;
//     }
//   }
//   let points = [pointsA, pointsB];
//   return points;
// }

// console.log(compare(a, b)); // -> [1,2]

// -----------------------------------------------------------------------------------------

// 8 - Print counting in reverse order from 100 t0 1
// function printReverse() {
//   for (let i = 100; i > 0; i--) {
//     console.log(i);
//   }
// }

// printReverse();

// -----------------------------------------------------------------------------------------

// 9 - Factorial of given number

// function factorial(n) {
//   let f = 1;
//   for (let i = 1; i < n; i++) {
//     f = f * i;
//   }
//   console.log(`factorial of ${n} is ${f}`);
// }

// console.log(factorial(10));

// -----------------------------------------------------------------------------------------

// 10 - Fibonacci Number of the given number

// function fibonacciNumbers(n) {
//   // method one
//   let a=[0,1];
//   let b=[];
//   for(let i=2; i<n; i++){
//     b=a[a.length-2] + a[a.length-1];
//     a[i] = b;
//   }
//   console.log(a);

// method two

// let a = 0;
// let b = 1;

// for (let i = 0; i <= n - 2; i++) {
//   let temp = a + b;
//   a = b;
//   b = temp;
//   // console.log(b);
// }

// return n === 0 ? a : b;
// }

// console.log(fibonacciNumbers(10)); // -> 55

// -----------------------------------------------------------------------------------------

// 11 - Sort an array using bubble sort algorithm

let arr = [3, 2, 5, 9, 7, 1, 0, 4, 6, 8];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

// -----------------------------------------------------------------------------------------
