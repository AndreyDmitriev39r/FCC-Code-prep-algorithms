/* TASK
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
  // Only change code below this line
  let copy = array.slice();
  let len = copy.length;
  for (let i = 1; i < len; i++) {
    // console.log('OUTER LOOP ITERATION ', i);
    for(let j = i; j > 0; j--) {
      // console.log('INNER LOOP ITERATION STARTS ', i , j);
      if (copy[j] >= copy[j - 1]) {
        // console.log('place found');
        break;
      }
      else {
        // console.log('swapping');
        [copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
      }
    }
    // console.log('OUTER LOOP ITERATION ENDS', i);
  }
  return copy;
  // Only change code above this line
}

const testArray1 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
const testArray2 = [5, 4, 33, 2, 8];

console.log(insertionSort(testArray1));
console.log(insertionSort(testArray2));
