// CommonJs
var count = require('./calculator.js').count;
var add = require('./calculator.js').add;
console.log('count:', count);
add(2, 3);
console.log('count:', count);
count += 1;
console.log('count:', count);

// ES6
// import { count, add } from './calculator.js';
// console.log('count:', count);
// add(2, 3);
// console.log('count:', count);
// count += 1; // 会抛出异常