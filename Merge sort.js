/* TASK
we can recursively divide the original input in two until we reach the base case of an array with one item.
A single-item array is naturally sorted, so then we can start combining
A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge.
*/

function mergeSort(array) {
  // Only change code below this line
  // helper function for merging two sorted arrays
  const mergeTwo = (arr1, arr2) => {
    let result = [];
    let [len1 ,len2, arr1Idx, arr2Idx] 
          = [arr1.length, arr2.length, 0, 0];
    while (arr1Idx < len1 || arr2Idx < len2) {
      if (arr1[arr1Idx] <= arr2[arr2Idx] || arr2[arr2Idx] === undefined) {
        // console.log(arr1[arr1Idx], arr2[arr2Idx])
        result.push(arr1[arr1Idx]);
        arr1Idx++;
      }
      else if (arr1[arr1Idx] > arr2[arr2Idx] || arr1[arr1Idx] === undefined) {
        // console.log(arr1[arr1Idx], arr2[arr2Idx])
        result.push(arr2[arr2Idx]);
        arr2Idx++;
      }
    }
    return result;
  }
  // BASE CASE
  const len = array.length;  
  if (len === 0 || len === 1) {
    return array;
  }
  // RECURSIVE STEP
  else {      
    const left = array.slice(0, len / 2);
    const right = array.slice(len / 2);
    return mergeTwo(mergeSort(left), mergeSort(right));
  }
  // Only change code above this line
}

console.log(mergeSort([12, 6 , 11, 10]));