
let num1=[1,2,3,4,5];//creating arrays
num1.push(6);//adding at end
console.log(num1);
num1.pop();//remove 1 elements from the end
console.log(num1);
num1.unshift(0);//adds elements at starting of array
console.log(num1);
num1.shift();//removes 1 element from starting position
console.log(num1);

//map
const doubled=num1.map((n)=>{ return n*2;});
console.log(doubled);

//filter
const even=num1.filter((n)=>n%2);
console.log(even);
//reduce
const add=num1.reduce((total,n)=>{return total+n;},0);
console.log(add);

//slice (si,ei) ei is not included
const subarray=num1.slice(1,3);//2,3
console.log(subarray);

const subarray2=num1.slice(-4,4);//2,3,4
console.log(subarray2);

//splice it modifies the array and it is used to add/delete/modify the elements inside the array

num1.splice(0,0,0);//adding 0 in the starting of an array
console.log(num1);

num1.splice(1,1,10);//replace 1 with 10
console.log(num1);//0,10,2,3,4,5
num1.splice(3,2);//delets the 2 elements from index 3 //0,10,2,5
console.log(num1);


//looping through array
num1.forEach((n)=>{
    console.log(n);
});

//array destructuring
const [fele,sele]=num1;
console.log(`${fele} and ${sele}`);

const num2=[10,20,30,40,50,20,20,20];
//spread operator to add arrays

const num3=[...num1,...num2];
console.log(num3);

const multidymention=[1,2,3,4,5,[10,20,30,40,[100,200,300,400],50,60],6];
console.log(multidymention);

//flattening the nested arrays
const flatarray=multidymention.flat(Infinity);
console.log(flatarray);


//find-->returns the first occurence element
const focc=num2.find((n)=>n==20);
console.log(focc);

//includes it returns boolean value if element present or not
const isavailable=num2.includes(20);
console.log(isavailable);

//sorting array
num2.sort();
console.log(num2);
//reversing
const rev=num2.reverse();
console.log(rev);

//converts elements into single string joins elements with symbol we provide if nothing joins with , by default
console.log(num2.join("_"));

const str = "a,b,c";//splits the string wherever it finds ","

const arr = str.split(",");

console.log(arr);