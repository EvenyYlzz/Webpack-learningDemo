import foo from './foo.js';
let invoked = true;
function bar(invoker) {
  if(!invoked){
    invoked = true;
    console.log(invoker + 'invokes bar.js');
    foo('bar.js');
  }
}
export default bar;