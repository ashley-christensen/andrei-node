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
  resolve('if true ..');
 } else {
  reject('Error, it broke!');
 }
});

promise
 .then(result => result + '!')
 .then(result2 => result2 + '?')
 .catch(() => console.log('errorr'))
 .then(result3 => console.log(result3 + '!'));