const name = 'calculator';
const add = function(a, b) {
  return a + b;
}
export {name, add}

// 可命名导出
// export {name, add as getSum}