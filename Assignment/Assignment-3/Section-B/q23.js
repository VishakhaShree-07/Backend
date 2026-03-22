const user = { name: "A", password: "123" };
const { password, ...safeUser } = user;
console.log(safeUser);