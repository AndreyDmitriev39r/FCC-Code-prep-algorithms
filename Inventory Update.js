function updateInventory(arr1, arr2) {
    for (let newItem of arr2) {
      let isItnewItem = true;
      for (let curItem of arr1) {
        if (curItem[1] === newItem[1]) {
          curItem[0] += newItem[0];
          isItnewItem = false;
          break;
        }
      }
      if (isItnewItem) {
        arr1.push(newItem);
      }
    }
  return arr1.sort((a, b) => {
    return (a[1] < b[1]) ? -1 : 1;
  }
  );
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);