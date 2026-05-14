
const cl1=setTimeout(()=>{
    console.log("hello");
},2000);

let count=0;
const cl2=setInterval(()=>{
    console.log(++count);
    if(count>=5){
        clearInterval(cl2);
        console.log("interval stoped");
    }
},1000);

