function megaFriend(friends){
  // check array or not 
  if(Array.isArray(friends) == false){
    return 'Please provide an array';
  }
  let mega = friends[0];
  for (const friend of friends) {
    if(friend.length > mega.length){
      mega = friend;
    }
  }
  return mega;
}

const friends = ['kutub', 'Lion', 'Shamol', 'sabbir'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

// check Lion is available or not in an array 

// using indexOf
if(friends.indexOf('Lion') != -1) {
  // console.log('Lion exists');
}

// using includes 
if(friends.includes('Lion')){
  console.log('Lion exists using incoludes');
}