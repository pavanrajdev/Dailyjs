//closures are the functions defined inside another function 
//the inner function can access the variables of outer functions and scope of outer function
//helps achieve private variables and state maintainance(react);

function outerCounter(){
  let count=0;//we can encapsulate a variable to make it private
  function innerCounter(){
    console.log(++count);
  }
  function getCount(){
    return count;
  }
  return {innerCounter,getCount};
}

const counter=outerCounter();
counter.innerCounter();
counter.innerCounter();
//counter.count -->undefined as it now behaves like a private variable cant accessed outside
console.log(counter.getCount());