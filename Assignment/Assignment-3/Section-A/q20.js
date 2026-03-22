const arr = ['a','b'];
let result = {};
arr.forEach((Val, i) => {
    result[i] = Val;
});
console.log(result);