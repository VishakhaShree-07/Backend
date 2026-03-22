const obj = { fullName: "A", age: 20 };
const { fullName, ...rest } = obj;
const newObj = { name: fullName, ...rest };
console.log(newObj);