const obj = { name: "A" };
const { name, role = "user" } = obj;
console.log(name, role);