import TodoList from "./todoList.js";

const run = () => {
  const todoInput = document.getElementById("todo-input");
  const submitBtn = document.getElementById("submit-button");
  const insertPoint = document.getElementById("todo-list");
  const completeBtn = document.querySelector(".completed");
  const removeBtn = document.querySelector(".remove");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    TodoList().addTodo(todoInput.value);
    insertPoint.innerHTML = TodoList().renderTodos();
  });
};

run();
