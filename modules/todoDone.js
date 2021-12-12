export const todoDone = () => {
    const todoTextEl = document.querySelectorAll(".todo-text");
    todoTextEl.forEach(todo => {
        // todo.style.textDecoration = "line-through";
        todo.parentElement.remove();
    })

}