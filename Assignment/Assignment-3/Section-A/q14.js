const a = [1,2];
const b = [10,20];
let result = [];

let max = Math.max(a.length, b.length);

for (let i = 0; i < max; i++) {
    if (i < a.length) result.push(a[i]);
    if (i < b.length) result.push(b[i]);
}

console.log(result);