import { addNewTodo } from "./modules/addNewTodo.js";


const todoController = () => {

    //controls and decides how data is displayed

    //handles events and is the 
    //mediator between the view and model.
}


//-----------------------------------------



const todoView = () => {
    addEventlisteners();
    //changes UI/DOM
}

function addEventlisteners() {
    const createTodoButton = document.querySelector("#create-todo");
    createTodoButton.addEventListener("click", addNewTodo)
}

todoView();


//-----------------------------------------
const todoModel = () => {
    //data logic/backend
}