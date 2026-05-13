
const h1=document.getElementById("h1");
h1.addEventListener("click",()=>{
    console.log(`clicked h1 tag element`);
})

const btns=document.querySelectorAll(".btn");

btns.forEach((btn,index)=>{
    btn.addEventListener("dblclick",()=>{
        console.log(`dbl clicked button ${index+1}`)
    });
});

const fbtn=document.querySelector(".btn");
fbtn.addEventListener("mouseover",()=>{
    console.log("mouse over");
});

const p1=document.getElementById("p1");

p1.addEventListener("click",()=>{
    p1.innerHTML="<b>not para is bold</b>";
});

const h3=document.getElementById("h3");
const contentbtn=document.getElementById("contentbtn");
contentbtn.addEventListener("click",()=>{
    console.log(h3.textContent);
});

const unhide=document.getElementById("unhide");
unhide.addEventListener("click",()=>{
    h3.style.display="block";
});


const d1=document.getElementById("d1");

function red(){
    d1.classList.remove("blue");
    d1.classList.add("red");
}
function blue(){
    d1.classList.remove("red");
    d1.classList.add("blue");
}

//toggling

const d2=document.getElementById("d2");

function tgl(){
    d2.classList.toggle("big");
}