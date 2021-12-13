
const todoSubmitButtonEl = document.querySelector("#new-todo-submit");
const todoInputEl = document.querySelector("#new-todo-text");
const todoBody = document.querySelector("#todo-container");

todoSubmitButtonEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (!todoInputEl.value) return;

    const todoContainer = document.createElement("div");
    todoContainer.className = "todo";
    
    const todoTextEl = document.createElement("p");
    
    const todoCheckboxEl = document.createElement("input");
    todoCheckboxEl.type = "checkbox";
    
    const todoDeleteButtonEl = document.createElement("button");
    todoDeleteButtonEl.textContent = ("delete");

    todoTextEl.textContent = todoInputEl.value;
    todoInputEl.value = "";

    todoContainer.appendChild(todoTextEl);
    todoContainer.appendChild(todoCheckboxEl);
    todoContainer.appendChild(todoDeleteButtonEl);
    
    todoBody.appendChild(todoContainer);

    todoDeleteButtonEl.addEventListener("click", (e) => {
        todoDeleteButtonEl.parentElement.remove();
    })

    todoCheckboxEl.addEventListener("click", (e) => {
        if (todoCheckboxEl.checked) {
            todoTextEl.classList.add("todo-done");
        } else {
            todoTextEl.classList.remove("todo-done");
        }
    })

})

