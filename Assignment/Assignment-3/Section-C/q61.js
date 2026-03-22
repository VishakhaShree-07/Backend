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
const orders2 = [
 {id:1,products:[{productId:5,qty:2}]}
];

const result = orders2.flatMap(o =>
    o.products.map(p=>({
        orderId:o.id,
        productId:p.productId,
        qty:p.qty
    }))
);

console.log(result);