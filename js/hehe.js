function addtask(){
    const taskinput=document.getElementById("taskinput");
    const tasklist=document.getElementById("tasklist");
    if(taskinput.value.trim()===""){
    alert("please enter your task")
return;
}
const li=document.createElement("li")
li.innerHTML=`
${taskinput.value}
<button onclick="removetask(this)">remove</button>
`;
tasklist.appendchild(li)
taskinput.value=""
}
function removetask(button){ 
    const li=button.parentelement;
    const tasklist=document.getElementById("tasklist");
    tasklist.removeChild(li);
}