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
    newTodoText.className = "todo-item";
    newTodoButton.className = "todo-item";
    newTodoDelete.className = "todo-item delete";

    newTodoContainer.appendChild(newTodoText);
    newTodoContainer.appendChild(newTodoButton);
    newTodoContainer.appendChild(newTodoDelete);

    body.appendChild(newTodoContainer);
};
