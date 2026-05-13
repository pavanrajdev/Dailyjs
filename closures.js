//closures are the functions defined inside another function 
//the inner function can access the variables of outer functions and scope of outer function
//helps achieve private variables and state maintainance(react);

function outerCounter(){
  let count=0;
  function innerCounter(){
    console.log(++count);
  }
  function getCount(){//lexical scope
    return count;
  }
  return {innerCounter,getCount};
}

const counter=outerCounter();
counter.innerCounter();
counter.innerCounter();
console.log(counter.getCount());