function insertionSort(array) {
    // Only change code below this line
    let copyArray = array.slice();
    array = []
    while (copyArray.length !== 0) {
      let minIndex = 0;
      for (let i = 1; i < copyArray.length; i++) {
        if (copyArray[minIndex] > copyArray[i]) {
          minIndex = i;
        }
      }
      //console.log(minIndex)
      array.push(copyArray[minIndex]);
      copyArray = copyArray.filter((value, index) => index !== minIndex);
      //console.log(copyArray)
    }
    return array;
    // Only change code above this line
  }