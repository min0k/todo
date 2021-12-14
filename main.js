const todoSubmitButtonEl = document.querySelector("#new-todo-submit");
const todoInputEl = document.querySelector("#new-todo-text");
const todoBody = document.querySelector("#todo-container");

let todos = [];

todoSubmitButtonEl.addEventListener("click", (e) => {
    e.preventDefault();   
    if (!todoInputEl.value) return;

    addTodoToArray();
    renderTodos(e);
});


const renderTodos = (e) => {
 
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo";
    
    const todoTextEl = document.createElement("p");
    
    const todoCheckboxEl = document.createElement("input");
    todoCheckboxEl.type = "checkbox";
    
    const todoDeleteButtonEl = document.createElement("button");
    todoDeleteButtonEl.textContent = ("delete");


    todoTextEl.textContent = todoInputEl.value;

    todoContainer.appendChild(todoTextEl);
    todoContainer.appendChild(todoCheckboxEl);
    todoContainer.appendChild(todoDeleteButtonEl);
    
    todoBody.appendChild(todoContainer);

    const deleteMe = todoInputEl.value;

    todoDeleteButtonEl.addEventListener("click", () => {
        todoDeleteButtonEl.parentElement.remove();
        todos = todos.filter((obj) => obj.todoText !== deleteMe);
        console.log(todos);
    })

    todoCheckboxEl.addEventListener("click", () => {
        if (todoCheckboxEl.checked) {
            todoTextEl.classList.add("todo-done");
        } else {
            todoTextEl.classList.remove("todo-done");
        }
    })

    todoInputEl.value = "";
 
}



const addTodoToArray = () => {
    const todoFactory = (todoText, status) => {
        return {todoText, status}
    }

    const newTodo = todoFactory(todoInputEl.value, false);

    todos.push(newTodo);

    console.log(todos);
}

