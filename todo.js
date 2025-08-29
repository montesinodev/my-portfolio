const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    todoInput.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
