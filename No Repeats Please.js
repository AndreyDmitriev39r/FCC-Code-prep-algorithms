/*
No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

const factorial = (num) => {
  let mult = num - 1;
  while (mult > 0) {
    num *= mult;
    mult--;
  }
  return num;
}

function permAlone(str) {
  
  const len = str.length;
  let charOccurances = {};
  
  for (let i = 0; i < len; i++) {
    if (charOccurances.hasOwnProperty(str[i])) {
      charOccurances[str[i]] += 1;
    }
    else {
      charOccurances[str[i]] = 1;
    }
  }
  
  console.log('Checking occurances of chars for string ', str);
  console.log(charOccurances);
  
  const allPossiblePerms = factorial(len);
  
  console.log('logging number of all perms ', allPossiblePerms);
  
  return str;
}

const testCases = [
  ["aab", 2],
  ["aaa", 0],
  ["aabb", 8],
  ["abcdefa", 3600],
  ["abfdefa", 2640],
  ["zzzzzzzz", 0],
  ["a", 1],
  ["aaab", 0],
  ["aaabb", 12],
  ];
  
for (test of testCases) {
  console.log('TEST CASE ', test[0]);
  console.log('result: ', permAlone(test[0]));
  console.log('no repeats perms, expected: ', test[1]);
  console.log('---------------')
}