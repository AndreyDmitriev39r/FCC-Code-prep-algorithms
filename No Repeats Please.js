/*
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

const str = 'aab';


const allPermutations = (str) => {
  let len = str.length
  //base cases
  if (len === 0 || len === 1) {
    return str;
  }
}

/*base cases test
const empty = '';
const singlechar = 'a';

console.log(allPermutations(empty))
console.log(allPermutations(singlechar))
*/