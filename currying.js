//its converts a function with multiple parameters into a sequence of functions, where each function takes one argument at a time.
//currying becomes possible because of closure where child functions remembers the parents properties even after parent completes its execution

function fun1(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// console.log(fun1(10)(2)(20));
//or

let a=fun1(10);
let b=a(2);
console.log(b(3));
//op-->15


//currying with ES-6

const res=(task1)=>(task2)=>(task3)=>`${task1+task2+task3}`
console.log(res(2)(3)(5));