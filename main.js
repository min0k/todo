//// NEXT STEPS
//// 1. Store todo array in local storage
//// 2. render todos on window load

import { renderTodos } from "./modules/renderTodo.mjs";
import { todos } from "./modules/todoArray.mjs";

const todoSubmitButtonEl = document.querySelector("#new-todo-submit");
const todoInputEl = document.querySelector("#new-todo-text");

todoSubmitButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (!todoInputEl.value) return;

  addTodoToArray();
  renderTodos(e);
});

const addTodoToArray = () => {
  const todoFactory = (todoText, status) => {
    return { todoText, status };
  };
  const newTodo = todoFactory(todoInputEl.value, false);
  todos.push(newTodo);
  console.log(todos);
};
