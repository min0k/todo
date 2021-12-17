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




///////

// const householdMembers = [
//   {name: "hootchi", species: "owl"},
//   {name: "squish", species: "sheep"},
//   {name: "pillb", species: "idk"},
//   {name: "mino", species: "human"},
//   {name: "swoley", species: "human"},
// ]


// const humans = householdMembers.filter(members => {
//   return members.species === "human";
// })

// const mutate = householdMembers.map(members => {
//   members.species = "mutation"
//   return members;
// })






