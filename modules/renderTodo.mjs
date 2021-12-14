import { todos, updateTodosArray } from "./todoArray.mjs";

const todoInputEl = document.querySelector("#new-todo-text");
const todoBody = document.querySelector("#todo-container");

export const renderTodos = () => {
 
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
        updateTodosArray(deleteMe);
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