// function addNumbers(num1, num2){
//   let result = 0;
//   for (const num of arguments) {
//     result = result + num;
//   }
//   return result;
// }
// const sum = addNumbers(23, 13, 85, 64, 84, 6545, 4, 84);
// console.log(sum);


// arguments for String 

function getFullName(firstName, lastName) {
  let fullName = '';
  for (const part of arguments) {
    fullName = fullName + part + ' ';
  }
  return fullName;
}
const name = getFullName('omuk', 'sonket', 'bin', 'tomuk sonket');
console.log(name);