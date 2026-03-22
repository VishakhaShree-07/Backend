const obj = { a: { b: 2 } };
const clone = JSON.parse(JSON.stringify(obj));
console.log(clone);