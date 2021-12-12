export const addNewTodo = () => {
    const todoText = document.getElementById("new-todo-input").value

    const body = document.querySelector("#todo-container");

    const newTodoContainer = document.createElement("div");
    const newTodoText = document.createElement("p");
    const newTodoButton = document.createElement("button");
    const newTodoDelete = document.createElement("p")

    newTodoText.textContent = todoText;
    newTodoButton.textContent = "done";
    newTodoDelete.textContent = "❌";

    newTodoContainer.className = "todo";
    newTodoText.className = "todo-item todo-text";
    newTodoButton.className = "todo-item done-button";
    newTodoDelete.className = "todo-item delete";

    newTodoDelete.position = "";

    newTodoContainer.appendChild(newTodoText);
    newTodoContainer.appendChild(newTodoButton);
    newTodoContainer.appendChild(newTodoDelete);

    body.appendChild(newTodoContainer);

};



