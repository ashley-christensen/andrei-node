const posts = [
 {
  title: 'Post1',
  body: 'This is Post One'
 },
 {
  title: 'Post2',
  body: 'This is Post Two'
 }
];

document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
 setTimeout(() => {
  let output = '';

  posts.forEach((post) =>
   output += `
   <ul>
   <li>${post.title}</li>
   <li>${post.body}</li>
   </ul>
   `

  );
  document.getElementById('output').innerHTML = output;
 }, 1000);

}