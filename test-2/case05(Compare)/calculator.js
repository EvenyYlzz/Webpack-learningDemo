// CommonJs
var count = 0;
module.exports = {
  count: count,
  add: function(a, b) {
    count += 1;
    return a+b;
  }
};

// ES6
// let count = 0;
// const add = function(a, b){
//   count += 1;
//   return a+b;
// }
// export { count, add };