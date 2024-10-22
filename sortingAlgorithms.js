// 11 - Sort an array using bubble sort algorithm

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

// -----------------------------------------------------------------------------------------

// 28 - Selection sort
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swaping k do tarike haen 1-teesra variable use kro 2-array destructuring
    if (minIndex !== i) {
      //   let temp = arr[i];
      //   arr[i] = arr[minIndex];
      //   arr[minIndex] = temp;
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(arr));

// -----------------------------------------------------------------------------------------
