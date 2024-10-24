// 35 - Counting Valleys
function countingValleys(steps, path) {
  for (let i = 0; i < steps; i++) {
    console.log(path[i]);
  }
}

// console.log(countingValleys(8, "UDDDUDUU"));

// -----------------------------------------------------------------------------------------

// 34 - Drawing book
// function pageCount(n, p) {
//   // n is total number of pages and p is the page  number we want to go
//   let frontPages = Math.floor(p / 2);
//   let backPages = Math.floor(n / 2) - Math.floor(p / 2);
//   return Math.min(frontPages, backPages);
// }

// console.log(pageCount(5, 3)); // 1

// -----------------------------------------------------------------------------------------

// 33 - Sales by Match
// function sockMerchant(arr) {
//   let pairMap = [];
//   let pairs = 0;

//   for (let element of arr) {
//     if (pairMap[element]) {
//       pairMap[element]++;
//     } else {
//       pairMap[element] = 1;
//     }
//   }

//   for (const key in pairMap) {
//     pairs += Math.floor(pairMap[key] / 2);
//   }
//   return pairs;
// }

// console.log(sockMerchant([1, 2, 1, 2, 3, 1, 2])); // 2

// -----------------------------------------------------------------------------------------

// 32 - Bill Division
// function billDivision(arr, k, b) {
//   //   arr.splice(k, 1); // splice method k illawa aik aur tarika b hai
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == k) {
//       continue; // is index wala element skip kr do
//     }
//     sum += arr[i];
//   }
//   let half = sum / 2;
//   if (half == b) {
//     return "Bon Appetit";
//   } else {
//     let remaining = b - half;
//     return remaining;
//   }
// }

// console.log(billDivision([3, 10, 2, 9], 1, 12));

// -----------------------------------------------------------------------------------------

// 31 - Day of the Programmer (256th day of the year)
// function dayOfTheProgrammer(year) {
//   let leapYear = false;
//   if (year < 1918 && year % 4 == 0) {
//     leapYear = true;
//   } else if ((year = 1918)) {
//     return `26.09.${year}`;
//   } else if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
//     leapYear = true;
//   }
//   if (leapYear) {
//     return `12.09.${year}`;
//   } else {
//     return `13.09.${year}`;
//   }
// }

// console.log(dayOfTheProgrammer(2000));

// -----------------------------------------------------------------------------------------

// 30 - Migratory Birds

// function migratoryBirds(arr) {
//   let frequencyMap = {};
//   let mostFrequent = arr[0];
//   let maxCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (frequencyMap[arr[i]]) {
//       frequencyMap[arr[i]]++;
//     } else {
//       frequencyMap[arr[i]] = 1;
//     }

//     if (
//       frequencyMap[arr[i]] > maxCount ||
//       (frequencyMap[arr[i]] === maxCount && arr[i] < mostFrequent)
//     ) {
//       maxCount = frequencyMap[arr[i]];
//       mostFrequent = arr[i];
//     }
//   }
//   return mostFrequent;
// }

// console.log(migratoryBirds([1, 4, 3, 3, 4, 4, 5, 3]));
// -----------------------------------------------------------------------------------------

// 29 - Divisible Sum Pairs
// function divisibleSumPairs(n, k, ar) {
//   let count = 0;
//   let arr = ar.sort();
//   for (let i = 0; i < n - 1; i++) {
//     let pairSum = 0;
//     for (let j = i; j < n; j++) {
//       if (i != j) {
//         pairSum = arr[i] + arr[j];
//         if (pairSum % k == 0) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }

// let n = 2;
// let k = 2;
// let ar = [8, 10];
// console.log(divisibleSumPairs(n, k, ar));

// -----------------------------------------------------------------------------------------

// 27 - Sub Array Division

// function subArrayDivision(s, d, m) {
//   let count = 0;
//   if (s.length == 1) {
//     return 1;
//   }

//   for (let i = 0; i <= s.length - m; i++) {
//     let sum = 0;
//     for (let j = i; j < i + m; j++) {
//       sum += s[j];
//     }
//     if (sum === d) {
//       count++;
//     }
//   }
//   return count;
// }

// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// console.log(subArrayDivision(s, 18, 7)); // Output: 3

// -----------------------------------------------------------------------------------------

// 26 - Breaking the records

// function breakingRecords(scores) {
//   let minScore = scores[0];
//   let maxScore = scores[0];
//   let maxCount = 0;
//   let minCount = 0;

//   for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > maxScore) {
//       maxCount++;
//       maxScore = scores[i];
//     } else if (scores[i] < minScore) {
//       minCount++;
//       minScore = scores[i];
//     }
//   }
//   // console.log(maxCount, minCount);
//   return [maxCount, minCount];
// }

// let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// console.log(breakingRecords(scores));
// -----------------------------------------------------------------------------------------

// 25 - Between two sets
// function count(a, b) {
//   let count = 0;

//   // Helper function to calculate GCD
//   function gcd(a, b) {
//     while (b !== 0) {
//       [a, b] = [b, a % b];
//     }
//     return a;
//   }

//   // Helper function to calculate LCM
//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   // Find LCM of array a
//   let lcmA = a[0];
//   for (let i = 1; i < a.length; i++) {
//     lcmA = lcm(lcmA, a[i]);
//   }

//   // Find GCD of array b
//   let bignumber = b[0];
//   for (let i = 1; i < b.length; i++) {
//     bignumber = gcd(bignumber, b[i]);
//   }

//   // Count numbers that are multiples of lcmA and divisors of bignumber
//   for (let i = lcmA; i <= bignumber; i += lcmA) {
//     if (bignumber % i === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// // Example usage:
// const a = [2, 4];
// const b = [16, 32, 96];
// console.log(count(a, b)); // Output: 3

// -----------------------------------------------------------------------------------------

// 24 - Kangroo problem

// function kangaroo(x1, v1, x2, v2) {
//   if (v1 > v2 && (x2 - x1) % (v1 - v2) === 0) {
//     return "YES";
//   } else if (v1 === v2 && x1 === x2) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

// console.log(kangaroo(0, 3, 4, 2)); // Output: YES
// console.log(kangaroo(0, 2, 5, 3)); // Output: NO

// -----------------------------------------------------------------------------------------

// 23 - Find Apples&Oranges s to t is the area of Sam's house a and b are the positions of
//      apples and orange tree respectively and you are given two arrays of positions of the
//      the apples and orange landing along x-axis
//      You have to find how many apples and oranges land inside the Sam's house

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let applesCount = 0;
//   let orangesCount = 0;
//   for (let i = 0; i < apples.length; i++) {
//     let differenceA = apples[i] + a;
//     if (differenceA >= s && differenceA <= t) {
//       applesCount++;
//     }
//   }
//   for (let j = 0; j < oranges.length; j++) {
//     let differenceO = oranges[j] + b;
//     if (differenceO >= s && differenceO <= t) {
//       orangesCount++;
//     }
//   }
//   console.log(applesCount);
//   console.log(orangesCount);
// }

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// -----------------------------------------------------------------------------------------

// 22 - Rounding off the grades, you wil receive an array of grades of students
//      if the grade is multiple of 5 and less than 3 we round it to the next multiple of 5
//      otherwise we keep it same
// let arr = [73, 67, 38, 33];
// function roundOff(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let remainder = arr[i] % 5;
//     console.log(remainder);
//     let addition = 5 - remainder;
//     if (remainder > 2 && arr[i] > 37) {
//       arr[i] += addition;
//     }
//   }
//   return arr;
// }
// console.log(roundOff(arr)); // [75, 67, 40, 33];
// -----------------------------------------------------------------------------------------

// 21 - Find if the given number is prime or not

// function isPrime(n) {
//   let flag = 1;
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       flag = 0;
//     }
//   }
//   return flag == 1
//     ? console.log("This is a prime number")
//     : console.log("This is not a prime number");
// }

// isPrime(417);

// -----------------------------------------------------------------------------------------

// 20 - Convert the 12 hour format to 24 hour format
//    - Sample input '07:05:45PM' | Sample output '19:05:45'

// let time12h = "07:05:45AM";
// function convertTimeTo24h(time12h) {
//   let format = time12h.slice(-2);
//   let time = time12h.slice(0, -2);
//   let [hours, minutes, seconds] = time.split(":");
//   hours = parseInt(hours, 10);

//   if (format === "PM" && hours !== 12) {
//     hours += 12;
//   }
//   if (format === "AM" && hours === 12) {
//     hours = 0;
//   }
//   hours = String(hours).padStart(2, "0");
//   return `${hours}:${minutes}:${seconds}`;
// }

// console.log(convertTimeTo24h(time12h));

// -----------------------------------------------------------------------------------------

// 19 - Find the largest number in an array and how many times it occured
// let arr = [4, 4, 1, 5, 5, 3, 3];
// let count = 0;
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//     count = 0;
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
  // by using loop
  // let f = 1;
  // for (let i = 1; i < n; i++) {
  //   f = f * i;
  // }
  // return f;

  // by recursion
  // if (n <= 1) {
  //   return 1;
  // }

  // return n * factorial(n - 1);
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
