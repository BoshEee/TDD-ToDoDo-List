let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
addBtn.addEventListener("click", add);
function add(event) {
  event.preventDefault();
  let toDoDiv = document.createElement("div");
  let newLi = document.createElement("li");
  let compBtn = document.createElement("button");
  let trashBtn = document.createElement("button");
  newLi.textContent = textInput.value;
  toDoList.appendChild(toDoDiv);
  toDoDiv.appendChild(newLi);
  toDoDiv.appendChild(compBtn);
  toDoDiv.appendChild(trashBtn);
}
