// computeAverageLengthOfWords
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length)/2
}
module.exports = computeAverageLengthOfWords;

// computeAverageLengthOfWords HTML 6
const computeAverageLengthOfWords = (word1, word2) => (word1.length + word2.length)/2
console.log(computeAverageLengthOfWords('Hola', 'chao'));

//getNthElement
function getNthElement(array, n) {
  // your code here
 if (array === 0) {
   return undefined;
 } else {
   return array [n];
 }
}
module.exports = getNthElement;
//getNthElement HTML 6
 const getNthElement = (array, n) => {
   if (array === 0) {
     return undefined;
   } else {
     return array [n];
   }
 }
 console.log(getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1));

 //convertDoubleSpaceToSingle
 function convertDoubleSpaceToSingle(str) {
  // your code here
  str = str.split("  ");
  return str.join(" ");
}
module.exports = convertDoubleSpaceToSingle;

//convertDoubleSpaceToSingle HTML 6
const convertDoubleSpaceToSingle = (str) => str.split("  ").join(" ");
console.log(convertDoubleSpaceToSingle('MESSI  IS  THE  GREATEST  PLAYER  EVER'));

//areValidCredentials
function areValidCredentials(name, password) {
  // your code 
  if (name.length >3 && password.length >= 8){
      return true;
  }else {
      return false
  }
}
module.exports = areValidCredentials;
////areValidCredentials HTML 6
const areValidCredentials = (name, password) => {
  if (name.length >3 && password.length >= 8){
    return true;
  } else {
    return false 
  }
}
console.log(areValidCredentials('Leslie', 'mano'));
console.log(areValidCredentials('Leslie', 'manouhtgh'));

//findPairForSum
function findPairForSum(array, number) {
  for ( let i = 0; i < array.length; i++) {
    for ( let o = 0; o < array.length; o++) {
      if (array[i] + array[o] === number) {
        return [array[i], array[o]];
    }
  }
  }
  }
  module.exports = findPairForSum;

  //findPairForSum HTML 6
  const findPairForSum = (array, number) => {
    for ( let i = 0; i < array.length; i++) {
      for ( let o = 0; o < array.length; o++) {
        if (array[i] + array[o] === number) {
          return [array[i], array[o]];
      }
    }
    }
    }