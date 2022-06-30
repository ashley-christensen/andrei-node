import { send } from './request';
import { read } from './response';


function makeRequest(url, data) {
 send(url, data);
 return read();
};

const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData);