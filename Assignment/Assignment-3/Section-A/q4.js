const arr  = [7,3,9,0];
const min = arr.reduce((m,v) => v < m ? v: m, Infinity);
console.log(min);