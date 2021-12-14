export let todos = [];

export const updateTodosArray = (deleteMe) => {
    todos = todos.filter((obj) => obj.todoText !== deleteMe);
}