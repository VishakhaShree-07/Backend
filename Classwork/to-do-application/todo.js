const fs =require("fs");
const path =require("path");

const TODO_FILE = path.join(__dirname,"todos.json");

console.log(TODO_FILE);

function readTodos() {
const data = fs.readFileSync(TODO_FILE,"utf-8");
return JSON.parse(data);
}

function write(todos) {
  fs.writeFileSync(TODO_FILE,JSON.stringify(todos,null,2));
}

let todo=[
  {"name":"vishakha"}

];
write(todo);





