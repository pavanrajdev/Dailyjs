
//Function Declaration
function add1(a,b){//Hoisted completely Can call before declaration
    console.log(a+b);
}
//Function Expression
const add2=function(a,b){
    return a+b;
}//stores the function return value into the variable
const add3=(a,b)=>{return a+b};
//this is faster and shorter function used mostly
//this does not have its own this keyword but it can take from surroundings