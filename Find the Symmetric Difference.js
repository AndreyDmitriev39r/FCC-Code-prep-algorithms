const removeDuples = (arr) => {
    return arr.reduce(
      (unique, item) =>
      unique.indexOf(item) !== -1 ? unique : [...unique, item], []
      )
  }
  
  
  //console.log(removeDuples([1, 2, 1, 5, 5]))//[1, 2, 5]//unit test
  
  
  const diffArray = (arr1, arr2) => {
    return removeDuples([
    ...arr1.filter(
      item => arr2.indexOf(item) === -1
      ),
    ...arr2.filter(
      item => arr1.indexOf(item) === -1
      )
    ])
  
    
  }
  
  //console.log(diffArray([1, 2, 3], [5, 2, 1, 4, 5]));//unit test
  function sym(args) {
    const numberOfarrays = arguments.length;
    //boundary condition
    if (numberOfarrays < 2) {
      return 'nope';
    }
    //base case
    const allArrays = Object.values(arguments);
    //console.log(allArrays);//test only
    if (numberOfarrays === 2) {
      return diffArray(...allArrays);
    }
    //recursive step
    else {
      return diffArray(allArrays[0], sym(...allArrays.slice(1)));
    }
  }