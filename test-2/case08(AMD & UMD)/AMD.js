define('getSum', ['calculator'], function(math) {
  return function(a, b) {
    console.log('sum: ' + calculator.add(a, b));
  }
})

// 定义模块
// 接受3个参数
// 参数1：当前模块id
// 参数2：当前模块的依赖
// 参数3：描述模块的导出值

// ------------------------------------------------------------------------ //

require(['getSum'], function(getSum) {
  getSum(2, 3);
})

// 导入模块
// 1.也使用require来导入，但是是异步的形式
// 2.通过AMD这种形式定义模块的好处在于其模块加载是非阻塞性的，当执行到require函数时并不会停下来去执行被加载的模块，而是继续执行require后面的代码，这使得模块加载操作并不会阻塞浏览器
// 存在的问题：异步加载方式不如同步清晰，并且容易造成回调地狱