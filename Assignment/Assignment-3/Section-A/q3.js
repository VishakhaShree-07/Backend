const arr = [5,1,9,3];
let max = arr[0];
for(let num of arr){
    if(num > max){
        max = num;
    }
}
console.log(max);