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

function createPost(post, callback) {
 setTimeout(() => {
  posts.push(post);
  callback();
 }, 2000);
}



createPost({ title: 'Post Three', body: 'this is post three' }, getPosts);