(function (global, main) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(...);
  } else if (typeof exports === 'object') {
    // CommonJs
    module.exports = ...;
  } else {
    // 非模块化环境
    global.add = ...;
  }
} (this, function() {
  // 定义模块主体
  return {...};
}));

// UMD并不能说是一种模块标准，不如说它是一组模块形式的集合更准确
// UMD其实就是根据当前全局对象中的值判断目前处于哪种模块环境