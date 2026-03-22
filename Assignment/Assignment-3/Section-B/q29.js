const obj = { id: 1, name: "A", email: "a@x" };
const keys = ["id", "email"];
let result = {};
keys.forEach(key => {
    if (key in obj) {
        result[key] = obj[key];
    }
});

console.log(result);