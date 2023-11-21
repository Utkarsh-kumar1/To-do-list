const userinput = document.querySelector("#inputBox");
const addlist = document.querySelector("#Submit");
const listcontainer = document.querySelector("#list-container");
const popup = document.querySelector('.popup-container');
let todelete;
function addtask() {
    if (userinput.value === '') {
        alert("You must write something");
    }
    else {
        let listitem = document.createElement("li");
        listitem.innerHTML = userinput.value;
        listcontainer.appendChild(listitem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        listitem.appendChild(span);
    }
    
    userinput.value = '';
    saveData();
}
addlist.addEventListener("click", () => { addtask() });
userinput.addEventListener("keypress", (event) => { 
    if(event.key ==="Enter")
    {
        addtask();
    }
 });

listcontainer.addEventListener('click',function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        todelete =  e.target.parentElement;
        popup.classList.toggle("hidden");
        saveData();
    }
})

popup.addEventListener("click",function (e)
{
    if(e.target.classList.contains("popup-container"))
    {
        popup.classList.toggle("hidden");  
    }
    else if(e.target.classList.contains("yes"))
    {
        todelete.remove();
        popup.classList.toggle("hidden");
    }
    else if(e.target.classList.contains("NO"))
    {
        popup.classList.toggle("hidden");
    }
})

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
   listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();