const obj = {user:"A",password:"123"};
const {password, ...rest} = obj;
console.log(rest);