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

function createPost(post) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   posts.push(post);
   const error = false;

   //Main Promise Logic
   if (!error) {
    resolve();
   } else {
    reject('Something went wrong');
   }

  }, 2000);
 });
}

createPost({ title: 'post three', body: 'post three hereeee' })
 .then(getPosts);