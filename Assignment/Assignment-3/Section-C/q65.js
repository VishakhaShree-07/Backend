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
const oldUsers=[{id:1,name:'A'}];
const newUsers=[{id:1,name:'Aman'}];

let result=[];

for(let i=0;i<oldUsers.length;i++){
    let changed=[];
    for(let key in oldUsers[i]){
        if(oldUsers[i][key]!==newUsers[i][key]){
            changed.push(key);
        }
    }
    if(changed.length>0){
        result.push({id:oldUsers[i].id,changedFields:changed});
    }
}

console.log(result);