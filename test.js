// const error = 'whatupp i am an error';

// const myFunction = (error) => {
//  if (error) {
//   throw Error;
//  }
// }
// myFunction(error);

//Promises
const promise = new Promise((resolve, reject) => {
 if (true) {
  resolve('if true it is resolved, and promise.then takes result as argument');
 } else {
  reject('Error, it broke!');
 }
});

promise
 .then(result => result + '!')
 .then(result2 => {
  // throw Error
  console.log(result2);
 })
 .catch(() => console.log('errorr'));