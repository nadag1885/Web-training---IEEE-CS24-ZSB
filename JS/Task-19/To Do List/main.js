let input = document.querySelector(".input");
let add = document.querySelector(".add"); 
let tasksbox = document.querySelector(".tasks"); 

let tasksArray = [];

if(localStorage.getItem("tasks")){
    tasksArray = JSON.parse(localStorage.getItem("tasks"))
}
 
console.log(tasksArray)

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();


//delet button click
tasksbox.addEventListener("click",e=>{
    if (e.target.classList.contains("delete")) {
        deletTask(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }

    if(e.target.classList.contains("task")){ 
        e.target.classList.toggle("done")
    }
})



add.onclick=function (){
    if (input.value !== ""){
        addTasktoArray(input.value); 
        input.value = ""; //clear input field
    }
}
function addTasktoArray(taskText){
    const task = {
        id : Date.now(),
        title : taskText,
        complete : false
    };
    //add task to tasks array
    tasksArray.push(task);
    // console.log(tasksArray)

    //add task to the page
    addElementToPage(tasksArray); 
    
    // Add Tasks To Local Storage
    addDataToLocalStorageFrom(tasksArray);
}

function addElementToPage(tasksArray){
    tasksbox.innerHTML="";
    tasksArray.forEach(task => {
        let taskdiv = document.createElement("div");
        taskdiv.className="task";
        // Check If Task is Done
    if (task.completed) {
        div.className = "task done";
        }
        taskdiv.setAttribute("data-id",task.id);
        taskdiv.appendChild(document.createTextNode(task.title));
        let del = document.createElement("span");
        del.className="delete"
        del.appendChild(document.createTextNode("Delete"))
        taskdiv.appendChild(del)
        tasksbox.appendChild(taskdiv);
        console.log(JSON.stringify(tasksArray));
        console.log(tasksArray)
    });
} 

function addDataToLocalStorageFrom(tasksArray){
    window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");        
    console.log(data)
    if (data) {
        let tasks = JSON.parse(data);
        console.log(tasks)
        addElementToPage(tasks);
    }
}

//Delet Task
function deletTask(taskId){ 
    tasksArray = tasksArray.filter(task  => task.id != taskId);
    addDataToLocalStorageFrom(tasksArray)
}

