/* TASK
In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return.
*/

function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}

// TESTS

const testCases = [
  [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92],
  [4, 6, 77, 11, 1, 1, 5, 3, 66, 200, 122],
  [586, 15, 3, 76, 25, 12, 1, 12, 2, 2]
]

for (let test of testCases) {
  let copy = test.slice();
  console.log('CASE ', test);
  console.log('EXPECTED ', copy.sort((a, b) => a - b));
  console.log('FACT ', quickSort(test));
  console.log('-----------------------------')
}