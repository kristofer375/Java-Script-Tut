const num = 42;
const innyNum = 42;

console.log(num === innyNum);
//primitives - passed by value

const obj = {};
const innyObj = obj;
//reference (object) - passed by reference
innyObj.a = 1;
console.log("obj", obj);
console.log("innyObj", innyObj);
