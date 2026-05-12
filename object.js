
const person={name:"pavan",age:21};
console.log(person.name);
person.city="hyderabad";//adding property to and object
console.log(Object.entries(person));
console.log();
person.name="Matangi Pavan Raj";//modifing the property name
console.log(Object.entries(person));
delete person.age;//deleting a property;
console.log(Object.entries(person));

//looping through object properties
for(let key in person){
    console.log(key,person[key]);
}

//object destructuring 
const {name,city}=person;
console.log(`hi ${name} you come from ${city}`);
console.log();

//object destructuring with diffrent names
const{name:use_name,city:user_city}=person;
console.log(`hi ${use_name} you come from ${user_city}`);

//copy and merge
const emp={empname:"mikel",salary:50000};
const firm={...person,...emp};
console.log(Object.entries(firm));


//nested objects

const worker={
    wname:"rakesh",
    age:34,
    Address:{
        village:"baroor",
        city:"hyderabad",
        disct:"sangareddy"
    },
    gender:"male"
}

console.log(worker);


//object to json
const j=JSON.stringify(person);

//json to object
const person2=JSON.parse(j);

console.log(j);
console.log(person2);