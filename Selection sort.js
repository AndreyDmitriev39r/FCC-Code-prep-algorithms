function selectionSort(array) {
    // Only change code below this line
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
      
      let minValue = array[i];
      let minIndex = i
      
      
      for (let j = i + 1; j < len; j++) {
        
        if (array[j] < minValue) {
          minValue = array[j];
          minIndex = j;
        }
        
      }
      
      //swapping using JS6 destructuring
      
      [array[i], array[minIndex]] = [minValue, array[i]];
      
      
    }
    return array;
    // Only change code above this line
  }