const arr = ['a','b','a','c'];
let freq = {};
for(let val of arr){
    freq[val]=(freq[val] || 0) + 1;
}
console.log(freq);