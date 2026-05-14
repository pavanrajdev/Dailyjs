
const obj=[];
const val=document.getElementById("addin");
const dis=document.getElementById("display");

val.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        add();
    }
})
function add(){
     let info = val.value.trim();
    if (info === "") return;
    obj.push(info);
    val.value = "";

    render();
}

function del(index){
    obj.splice(index,1);
    render();
}
function render() {
    dis.innerHTML = obj.map((n, index) =>
        `<li>
            ${n}
            <button onclick="del(${index})">Delete</button>
        </li>`
    ).join("");
}

