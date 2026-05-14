//this--> refers to the object which is calling the funciton





//1.global call
function show(){
    console.log(this);
}
show();//-->in browser it refers to window objects
        //-->if used strict mode undefined

//2.Inside object

const person={
    name:"pavan",
    city:"hyderabad",
    show:function(){
        console.log(this.name);
    }
}
person.show();//pavan (so this = obj)


//3. this in Arrow Function  (it take this from their surrounding (lexical scope))

// const obj = {
//   name: "Pavan",
//   show: () => {
//     console.log(this.name);
//   }
// };

// obj.show();//undefined


const obj = {
  name: "Pavan",
  show: function () {
    const inner = () => {
      console.log(this.name);//this is shows this which is pavan
    };
    inner();
  }
};

obj.show(); // Pavan
