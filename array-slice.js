const numbers = [3, 6, 4, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4,8);
// console.log(numberSliced);

// remove number from array using splice / 4 no index theke 3 ta number bad jabe
// const numberSpliced = numbers.splice(4,3);
// console.log(numberSpliced);
// console.log(numbers);

// remove & add number from array using splice / 4 number index er por 3 ta number bad jabe & porer gula add hobe 
const numberSpliced2 = numbers.splice(4,3, 99, 55, 74, 56);
console.log(numberSpliced2);
console.log(numbers);