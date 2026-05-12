
var a=10;//it is a global or function scope variable 
        // the variable is hoisted by stored as undefined
        //we can reinitialize and update
let b=20;//it is a block scope variable
        //it is also hoisted but NOT initialized with undefined Accessing before declaration gives error (Temporal Dead Zone)
        //we can update but cant reinitialize
const c=30;//it is constant
            //hoisted
            // you can niether reinitialize nor update the value 
