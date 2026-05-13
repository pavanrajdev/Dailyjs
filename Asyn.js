
//callback is function calling another function so that it can execturte later
function fun1(callback){
    console.log("hello i am fun1");
    callback();
}

function fun2(callback){
    console.log("hello i am fun2");
    callback();
}

function fun3(callback){
    console.log("hello i am fun3");
    callback();
}

function fun4(){
    console.log("hello i am fun4");

}

//callback hell
fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            fun4();
        })
    })
})

//to overcome the callback hell we use promises

function task1(){
    const task1=true;
    
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(task1)
                resolve("task1 completed");
            else
                reject("task1 incomplete");
    },3000)
    })
}
function task2(){
    const task2=true;
    
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(task2)
                resolve("task2 completed");
            else
                console.log("task2 incomplete");
    },5000)
    })
}
function task3(){
    const task3=true;
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{ 
            if(task3)
                resolve("task3 completed");
            else
                console.log("task3 incomplete");
    },2000)
    })
}



function task4(){
    const task4=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(task4)
            resolve("task4 completed");
            else
                reject("task4 is incomplete");
        },1000)
    })
}

task1().then((value)=>{console.log(value); return task2()})
        .then((value)=>{console.log(value); return task3()})
        .then((value)=>{console.log(value); return task4()})
        .then((value)=>{console.log(value); console.log("all tasks complerted")})
        .catch((error)=>{console.log(error)});



//using async function to perform tasks

function work1(){
    const work1=true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(work1)
            resolve("work1");
            else
                reject("not work1");
        },1000)
    })
}
function work2(){
    const work2=true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(work2)
            resolve("work2");
            else
                reject("not work2");
        },2000)
    })
}
function work3(){
    const work3=false;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(work3)
            resolve("work3");
            else
                reject("not work3");
        },1500)
    })
}

async function asyncfunction(){
    try{
        const wk1=await work1();
        console.log(wk1);

        const wk2=await work2();
        console.log(wk2);

        const wk3=await work3();
        console.log(wk3);
    }
    catch(error){
        console.log(error);
    }
}

asyncfunction();