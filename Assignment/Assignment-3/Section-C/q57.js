const users = [
  { id:1, name:"Aman", age:22, isActive:true },
  { id:2, name:"Riya", age:17, isActive:false },
  { id:3, name:"Rahul", age:25, isActive:true },
  { id:4, name:"Neha", age:19, isActive:false }
];

const orders = [
  { id:1, userId:1, total:500, status:"completed" },
  { id:2, userId:2, total:300, status:"pending" },
  { id:3, userId:1, total:200, status:"completed" },
  { id:4, userId:3, total:700, status:"completed" }
];
let result={'<18':0,'18-24':0,'25+':0};

for (let u of users){
    if(u.age<18) result['<18']++;
    else if(u.age<=24) result['18-24']++;
    else result['25+']++;
}

console.log(result);