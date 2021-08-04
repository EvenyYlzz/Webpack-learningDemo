// 重命名导入
// import { name, add as calculatorSum } from './calculator.js';

// 整体导入
import * as calculator from './calculator.js';
console.log('calculator.add(2, 3)', calculator.add(2, 3));
console.log('calculator.name:', calculator.name);

// import { name, add } from './calculator.js';
// const sum = add(2, 3);
// console.log('sum:', sum);