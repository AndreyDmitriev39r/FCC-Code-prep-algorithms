/* TASK
Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.
*/

function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}


//TEST
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

const testValuesAndExpected = [
  [0, [13, 5, 2, 0]],
  [1, [13, 5, 2, 0, 1]],
  [2, [13, 5, 2]],
  [6, 'Value Not Found'],
  [11, [13, 5, 10, 11]],
  [13, [13]],
  [70, [13, 19, 22, 49, 70]]
];



for (let testValue of testValuesAndExpected) {
  console.log('CASE ', testValue[0]);
  console.log('EXPECTED ', testValue[1]);
  console.log('FACT  ', binarySearch(testArray, testValue[0]));
  console.log('-------------------');
}
