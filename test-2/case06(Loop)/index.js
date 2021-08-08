// CommonJs
require('./foo.js')

//  循环依赖问题
//  在CommonJS中，遇到循环依赖我们没有办法得到预想中的值

// ES6
// import foo from './foo.js'