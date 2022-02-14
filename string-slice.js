const anthem = 'Amar Shonar Bangla Ami Tomai Valobashi';

// splice with white space
const words = anthem.split(' ');
// console.log(words);
// splice with specific word 5 to 12 index
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

// subString 
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

//concat / Sting is immutable
// coonst first = 'amader'
// coonst second = 'city'
// const fullString = first + second;
// console.log(fullString);


// set gap between string

const words2 = ['alim', 'badhon', 'cameron', 'david'];
// set white space 
// const alljoined = words2.join(' ');
//set ,
const alljoined = words2.join(', ');
console.log(alljoined);
