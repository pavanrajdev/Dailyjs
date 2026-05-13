//js is runned in 2 phases
//1.Memory creation
//2.execution
//during memory creation the declarations(not initializations) moved on top of theie scop before execution this is called hoisting
//diffrent variables hosting
//1.var-->hoisted and initialized as undefined 2.let-->hoisted but not initialized,3.const-->hoisted but not initialized
//so we can call var variable before declaring only 
//but we cant for let and const as they are not initialized they move to tdz(Temporal dead zone)
//TDZ-->Time between entering scope and actual declaration line where variable exists but cannot be accessed.

//Hoisting does NOT move code
//It just allocates memory before execution

console.log(a);//no error but undefined 
var a=10;
console.log(a);
//console.log(b); ReferenceError due to temporal dead zone for b and c
let b=20;
console.log(`${a},${b}`);

//console.log(c);-->temporal dead zone for c
const c=30;
console.log(`${a},${b},${c}`);

console.log(add1(10,20));//prints output correctly js fully hoist function declaration
function add1(a,b){
    return a+b;
}

console.log(add2);//based on variable
//console.log(add2(20,30));//error because add2 here is undifined  and undefined(10,20)-->error(depend on variable hoisting);
var add2=function(a,b){
    return a+b;
}
console.log(add2(20,30));


//add3-->TDZ based on variable
//console.log(add3(30,40));//ReferenceError: Cannot access 'add3' before initialization
const add3=(a,b)=>a+b;
console.log(add3(30,40));