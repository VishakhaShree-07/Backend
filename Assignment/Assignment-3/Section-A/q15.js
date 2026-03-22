const arr = [1,2,3,4];
let k = 2;
let result = [];

let sum = 0;

for (let i = 0; i < k; i++) {
    sum += arr[i];
}
result.push(sum);

for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i-k] + arr[i];
    result.push(sum);
}

console.log(result);