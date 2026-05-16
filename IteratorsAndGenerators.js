

//iteration function (custom)
function iterfun(start=0,end=Infinity,step=1){
    let iter=start;
    
        function next(){
            if(iter<=end){
                let result={value:iter,done:false};
                iter+=step;
                return result;

            }
            return{value:iter,done:true};
        }
     return {next};
}

let iterable=iterfun(1,10,2);
let result=iterable.next();

while(!result.done){
    console.log(result.value);
    result=iterable.next();
}


//iterator function using generator function
// pavan raj, a generator function in JavaScript is a special function
//  that can pause its execution and later continue from where it stopped.

// It is written using function* and uses the yield keyword.
function* iterfun2(start=0,end=Infinity,step=1){
    for(let i=start;i<=end;i+=step){
        yield i;
    }
}

const one=iterfun2(1,20,2);

console.log();
for(let val of one){
    console.log(val);
}
console.log(one.next());