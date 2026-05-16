

person1={
    fname:"pavan",
    lname:"matangi",
   
}
const name1= function fullname(hometown){
      return `Hello ${this.fname} ${this.lname} how are you ${hometown}`;
}
person2={
    fname:"raj",
    lname:"matangi",
}
//this is calle function borrwing we can even use call with global function and pass referance obj
console.log(name1.call(person2,"zaheerabad"));
console.log(name1.call(person1,"hyderabad"));

//apply is similar to call but takes arguments as array and it will help in performing some tasks on array 

const name2=name1.apply(person1,["zaheerabad"]);
console.log(name2);

let arr=[1,2,3,4,5];

console.log(Math.max.apply(null,arr));

// bind()
// It does not immediately execute the function.
// It returns a new function with `this` permanently  bound to the provided object.
// to the provided object.
// That returned function can be called later whenever we want.

fullname2=name1.bind(person1,"namsthe");
console.log(fullname2());