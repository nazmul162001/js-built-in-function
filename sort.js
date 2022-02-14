// sort 

const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// sort from name array 
const friends = ['kabil', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];

// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// reverseSort 
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

// sort & reverse mixed 
// const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

/////////Number sorting Fun/////////
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function(a, b){
  return a - b;
});
console.log(sortedBigNumbers);