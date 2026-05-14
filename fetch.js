
//older way to perform fetch
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(data=>{
        let firstfifty=data.slice(0,50);
        console.log(firstfifty);
    });



//  async function using fetch API new and reliable way
async function getTodos(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
    if(!response.ok){
        throw new Error(`couldnt fetch data ${response.status}`);
    }
    const data= await response.json();
    const first10=data.slice(0,10);
    console.log(first10);
}
    catch(error){
        console.log(error);
    }
    
}

getTodos();