import { addNewTodo } from "./addNewTodo.js";
import { todoDone } from "./todoDone.js";

export const addElisteners = () => {
    addElTodoButton();
    addElDoneButton();
};    


const addElDoneButton = () => {
    const createDoneButtonEl = document.querySelectorAll(".done-button");
    createDoneButtonEl.forEach(button => {
        button.addEventListener("click", todoDone);
    })
}

const addElTodoButton = () => {
    const createTodoButtonEl = document.querySelector("#create-todo");
    createTodoButtonEl.addEventListener("click", addNewTodo)
}