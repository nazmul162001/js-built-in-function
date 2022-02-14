const anthem = 'Amar Shonar Bangla Ami Tomai Valobashi';
const search = 'valo';


const userInput = 'blACKPink';
const saveUserName = 'blackPink';
// console.log(userInput.toLowerCase());
// console.log(saveUserName.toLowerCase());

// match with lowerCase /////
// if(userInput.toLocaleLowerCase() == saveUserName.toLocaleLowerCase()){
//   console.log('user exists');
// }


// match with upperCase /////
if(userInput.toLocaleUpperCase() == saveUserName.toLocaleUpperCase()){
  console.log('user exists');
}