const _=require('lodash');//import lodash from node (npm install lodash);
let person1={
    name:"pavan",
    skills:{
        primary:"java",
        secondary:"mysql"
    },
    calcage:function(param){
        return param
    },
    date:new Date()
}

//shalow
//method 1-->person2=person1;
//person2.name="matangi"; objects in java are refrence based so change on person2 will reflect on person1

//method2-->using object.assign
// person2=Object.assign({},person1);
// person2.name="matangi";

//method3-->using es6 spread operator
// person2={...person1};
//both method 2 and 3 works for single dymention or flat objects but cant work for nested objects 
//eg person1.skills.primary="devops";//here the devops will appear for both person1 and 2


//method4 using json
// person2=JSON.parse(JSON.stringify(person1));
// person2.skills.primary="devops"; 
//here we can override the problem of the copy of elements  in nested obj reflect in remaining objects 
//but here when we have functions we may loose it in other objects and datatype of some objects like date will be converted into string



//we can use lowdash to perform deep copy lowdash-->JavaScript utility library
let person2=_.cloneDeep(person1);

//deep clone-->structuredClone
person1.name="Matangi"
person2.skills.primary="devops"
console.log(person1);
console.log(person2);