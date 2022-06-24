

// Promise.all(urls.map(url => {
//  return fetch(url).then(response => response.json());
// }
//  )).then(results => {
//   console.log(results[0])
//   console.log(results[1])
//   console.log(results[2])
//  })
const urls = [
 'https://jsonplaceholder.typicode.com/users',
 'https://jsonplaceholder.typicode.com/posts',
 'https://jsonplaceholder.typicode.com/albums'
];

const getInfo = Promise.all(urls.map(url => {
 return fetch(url).then(res => res.json())
})).then(results => {
 console.log(results)
})