const axios = require('axios');

axios.get('http://wwwwww.google.com')
 .then((response) => {
   console.log(response);
  })
  .catch((error) => {
   console.log(error)
  })
  .then(() => {
   console.log('this execute regardless!!!!!!')
  })
