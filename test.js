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

const promise2 = new Promise((resolve, reject) => {
 setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
 setTimeout(resolve, 1000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
 setTimeout(resolve, 5000, 'What is up');
});

Promise.all([promise, promise2, promise3, promise4])
 .then(values => {
  console.log(values);
 });