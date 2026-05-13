

//prototype is an object that is used for sharing properties and methods between objects.
//JavaScript uses prototypes to achieve inheritance.
//Every JavaScript function automatically gets a special property called: prototype
//This prototype object is shared by all objects created using new


function Person(name) {
  this.name = name;
  Person.prototype.add=function add1(a,b){
    return a+b;
  }
}
  
  function sub1(a,b){
    return a-b;
  }

const p1=new Person("pavan");
//console.log(p2.sub(20,10));-->we get error but we can access after adding of them 


console.log(Person.prototype);//WE CAN ONLY ACCESS CONSTRUCTER AND ADD1

Person.prototype.sub=sub1;

Person.prototype.Company="goldman-sachs";

console.log(Person.prototype);//WE CAN ACCESS ALL 4 PROPERTIES OF THE PROTOTYPE

const p2=new Person("mukesh");

console.log(p2.sub(20,10));

p1.village="baroor";

console.log(p1.village);

p1.mul=function(a,b){
    return a*b;
}

console.log(p1.sub(20,10));
console.log(p1.mul(2,3));
//console.log(p1.prototype);-->this is undefined because it it object

console.log(p1.add1 === p2.add1);//returns true because of prototypes else it would return false




// Level 1
function Animal() {}

Animal.prototype.eat = function () {
    console.log("Eating");
};

// Level 2
function Person1(name) {
    this.name = name;
}

// Person inherits Animal
Person1.prototype = Object.create(Animal.prototype);

// Fix constructor
Person1.prototype.constructor = Person1;

Person1.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

// Level 3
function Student(name, course) {
    this.name = name;
    this.course = course;
}

// Student inherits Person
Student.prototype = Object.create(Person1.prototype);

// Fix constructor
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    console.log(this.name + " is studying " + this.course);
};

// Object creation
const s1 = new Student("Pavan", "JavaScript");


s1.eat();       // from Animal
s1.sayHello();  // from Person
s1.study();     // from Student