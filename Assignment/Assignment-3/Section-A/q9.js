const arr = [1,2,3,4];
let k = 1;
k=k%arr.length;
const result = [...arr.slice(-k), ...arr.slice(0, -k)];
console.log(result);