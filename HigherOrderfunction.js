//higherorder function is a function that Takes another function as an argument
//OR returns another function Sometimes both

let arr=[2,4,6,7];

//area of circle=pi r^2 
//Circumference of circle =2piR

function areas(n){
       return Math.PI*(n*n);
}
function circumferences(n){
       return 2*Math.PI*n;
}

function all(al,logic){
    let output=[];
    al.forEach((n)=>{
        output.push(logic(n));
    })
    return output;
}

console.log(all(arr,areas));
console.log(all(arr,circumferences));
let area=arr.map(areas);
console.log(area);
