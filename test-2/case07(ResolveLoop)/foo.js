import bar from './bar.js';
function foo(invoker) {
  console.log(invoker + ' invokes foo.js');
  bar('foo.js');
}
export default foo;