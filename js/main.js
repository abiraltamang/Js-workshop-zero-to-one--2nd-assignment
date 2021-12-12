
var todoList = [];

const inputField = document.getElementById("inputField");
const container = document.getElementById("container");


function addTodo(event){
    event.preventDefault();
    todoList.push({
        data: inputField.value,
        date: Date(),
    });
    inputField.value = "";

    localStorage.setItem("todolist",JSON.stringify(todoList));
    renderList();
    
}

function renderList(){
    container.innerHTML = "";
    todoList.forEach((todo,index)=>{
        container.innerHTML += `

        <div class="alert alert-success">
        <h3 class="alert alert-success" onclick="deleteTodo(${index})">${todo.data}</h3><br/>
        <small>${todo.date}</small>
        </div>
       
        `;
    })
};

function deleteTodo(idx){

    var input = confirm("Do you want to delete TODO ?");

    if (input = true){

        todoList=todoList.filter((value,index)=>index!=idx);
        renderList();
    }
}