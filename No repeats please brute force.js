const allPerms = (str) => {
  
    let result = [str[0]]
    
    for (let i = 1; i < str.length; i++) {
    
      let newPerms = [];
      
      for (let perm of result) {
        
        for (let j = 0; j <= perm.length; j++) {
          newPerms.push(perm.slice(0, j) + str[i] + perm.slice(j))
        }
        
      }
      
      result = newPerms;
      
    }  
    
    return result;
}

const filterForRepeats = (str) => {
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        return false;
      }
    }
    return true;
}


function permAlone(str) {

    let counter = 0;

    let allOfThem = allPerms(str);

    allOfThem.forEach(perm => {
        if (filterForRepeats(perm)) {counter++;}
    })

    return counter;
    
  }

