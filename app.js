// computeAverageLengthOfWords
const computeAverageLengthOfWords = (word1, word2) => (word1.length + word2.length)/2
console.log(computeAverageLengthOfWords('Hola', 'chao'));

//getNthElement
 const getNthElement = (array, n) => {
   if (array === 0) {
     return undefined;
   } else {
     return array [n];
   }
 }
 console.log(getNthElement([1, 2, 3, 4, 5, 6, 100, 7, 9], 1));

//convertDoubleSpaceToSingle
const convertDoubleSpaceToSingle = (str) => str.split("  ").join(" ");
console.log(convertDoubleSpaceToSingle('MESSI  IS  THE  GREATEST  PLAYER  EVER'));

 //areValidCredentials
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
  const findPairForSum = (array, number) => {
    for ( let i = 0; i < array.length; i++) {
      for ( let o = 0; o < array.length; o++) {
        if (array[i] + array[o] === number) {
          return [array[i], array[o]];
      }
    }
    }
    }
console.log(findPairForSum([3, 17, 12, 7, 2], 5));

    //computeSumOfAllElements

      const computeSumOfAllElements = (arr) => {
      const reduceArr = arr.reduce((previousValue, currentValue) =>{
        return previousValue + currentValue;
      });
      return reduceArr;
    };
    console.log(computeSumOfAllElements([2, 4, 6]));

    //filterOddElements
    const filterOddElements = (arr) => {
       let newNumbers = [];
       for (let i = 0; i< arr.length; i ++) {
       if (arr[i] % 2 !== 0) { 
       newNumbers.push(arr[i]); 
     }
    } return newNumbers;
  }
  console.log(filterOddElements([1, 2, 3, 4, 5]));