/* TASK
This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
*/

function insertionSort(array) {
    // Only change code below this line
    let copy = array.slice();
    // outer loop >>> copy[i] will be the first unsorted element
    for (let i = 1; i < copy.length; i++) {
      const element = copy[i];      
      // inner loop >>> moving through sorted portion backwards
      for (let j = i - 1; j >= 0; j--) {
        // console.log(copy[j]);
        //if position for element is found >>> can insert it and quit inner loop
        if (copy[j] <= element) {
          copy[j + 1] = element;          
        }
        //otherwise >>> (e.g elem === 2 and copy[j] === 4)
        //4 goes to replace 2 on its position, and inner loop continues
        else {
          copy[j + 1] = copy[j];
        }
      }
      // console.log('------------');
    }
    return copy;
    // Only change code above this line
}

const testArray = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];

console.log(insertionSort(testArray));