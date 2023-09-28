
const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");


const userName = prompt("Username:"); 
document.querySelector(".user-name").innerText = userName;
toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", DeleteCheck);

function addToDo(event) {
    
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    
    
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);


    toDoList.appendChild(toDoDiv);

    
    toDoInput.value = '';
}
function DeleteCheck(e)
{
    const item = e.target;

    
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        todo.remove()
    }
    
    
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}