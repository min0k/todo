//// Make todos a private array, make it a closure. 
//// create todo as a private variable in a function, return a function that
//// adds the new object to it

export let todos = [];

export const updateTodosArray = (deleteMe) => {
    todos = todos.filter((obj) => obj.todoText !== deleteMe);
}