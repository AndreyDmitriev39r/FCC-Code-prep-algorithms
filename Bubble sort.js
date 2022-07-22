function bubbleSort(array) {
    // Only change code below this line
    let flag = false // flag used to quit loops if array is sorted already
    while (!(flag)) {
      flag = true;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          flag = false
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
    return array;
    // Only change code above this line
  }
  
  
let test1 = [1 ,3, 4, 2, 0];
  
console.log(bubbleSort(test1));