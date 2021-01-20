let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
addBtn.addEventListener("click", add);

function check(event) {
  event.preventDefault();
  event.target.style.textDecoration = "line-through";
  //event.target.classList.add("checkstyle");
}

function add(event) {
  event.preventDefault();
  let toDoDiv = document.createElement("div");
  let newLi = document.createElement("li");
  let compBtn = document.createElement("button");
  compBtn.addEventListener("click", check);
  compBtn.textContent = "check";
  let trashBtn = document.createElement("button");

  newLi.textContent = textInput.value;
  toDoList.appendChild(toDoDiv);
  toDoDiv.appendChild(newLi);
  toDoDiv.appendChild(compBtn);
  toDoDiv.appendChild(trashBtn);
}
