// 5 - Counting sort
function countingSort(arr) {
  let countMap = [];
  let newArr = [];

  for (let element of arr) {
    if (countMap[element]) {
      countMap[element]++;
    } else {
      countMap[element] = 1;
    }
  }
  
  for (let i = 0; i < countMap.length; i++) {
    while (countMap[i] > 0) {
      newArr.push(i);
      countMap[i]--; 
    }
  }

  return newArr;
}

let arr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
console.log(countingSort(arr));

// ------------------------------------------------------------------------

// 4 - Quick sort
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];

//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [5, 3, 6, 2, 4, 1];
// console.log(quickSort(arr));
// -----------------------------------------------------------------------------------------

// 3 - Insertion sort
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }

// console.log(insertionSort([7, 2, 4, 1, 5])); // Output: [1, 2, 4, 5, 7]

// -----------------------------------------------------------------------------------------

// 2 - Selection sort
// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // swaping k do tarike haen 1-teesra variable use kro 2-array destructuring
//     if (minIndex !== i) {
//       //   let temp = arr[i];
//       //   arr[i] = arr[minIndex];
//       //   arr[minIndex] = temp;
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }

//   return arr;
// }

// // Example usage:
// let arr = [64, 25, 12, 22, 11];
// console.log(selectionSort(arr));

// -----------------------------------------------------------------------------------------

// 1 - Sort an array using bubble sort algorithm

// let arr = [3, 2, 5, 9, 7, 1, 0, 4, 6, 8];
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));
