// যত যায়গায় laptop লেখাটা আছে ওই product টা show করাও।

const products = [
  'Dell hardcore i29 200GB laptop',
  'iphone 1TB camera flashlight phone',
  'yellow laptop with black camera',
  '1x59 Lenovo commercial yoga laptop',
  'LG supernova laptop',
  'HTC low price Phone',
  'purple color phone with Laptop'
];

const searching = 'laptop';



// Using -- indexOf method
// const output = [];
// for (const product of products) {
//   if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
//     output.push(product);
//   }
// }
// console.log(output);



// Using -- includes method
const output = [];
for (const product of products) {
  if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
    output.push(product);
  }
}
console.log(output);