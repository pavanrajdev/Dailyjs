
// Exception is an unexpected event that disrupts
// the normal flow of program execution.
// So we handle exceptions to make the program run smoothly.

1.//try---catch---finally

let a=10;
let b=0;
try{
    console.log(a/b);//infinity it does not cause exception
}
catch(error){
    console.log(error)
}
finally{
    console.log("execute at any situation");
}




//throw is used to create our own errors

let age=15;
try{
    if(age<18){
        throw "age is less than 18";
    }
    else{
        console.log("elegible for vote");
    }
}
catch(error){
    console.log(error);
}



//throwing error object

let balance=500;
let withdraw=1000;

try{
    if(withdraw>balance){
        throw new Error("Insufficient balance");
    }
    console.log("money withdrawn");
}
catch(err){
    console.log(err.message);
}

//diffrance between throw object and throw message is by throw new error object we can debug exceptions easyly 
// 13. Multiple Error Types

// JavaScript built-in errors:

// Error Type	    Meaning
// ReferenceError	- Variable not declared
// TypeError	    - Wrong type usage
// SyntaxError	    - Invalid syntax
// RangeError	    - Value out of range
// URIError	URI     - function problem
// EvalError	    - eval related
// AggregateError	- Multiple promise errors

// let num = 10;//-->TypeError
// num();

// let num = 10;-->type error
// num();

// let arr = new Array(-1);//-->rangeerror

