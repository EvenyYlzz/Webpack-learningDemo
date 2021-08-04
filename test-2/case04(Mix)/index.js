// 混合导入，add是默认导出的，name是命名导出的
import add, { name } from './calculator.js';

console.log('命名导出的name:', name);

console.log('默认导出的匿名方法add:', add(2, 3));