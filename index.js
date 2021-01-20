let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
addBtn.addEventListener("click", add);

function check(event) {
  event.preventDefault();
  event.target.style.textDecoration = "line-through";

}

function add(event) {
  event.preventDefault();
  let toDoDiv = document.createElement("div");
  let newLi = document.createElement("li");
  let compBtn = document.createElement("button");
  let trashBtn = document.createElement("button");

  compBtn.innerHTML = '<i class="fas fa-check"></i>';
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

  compBtn.addEventListener("click", check);
  
  


  newLi.textContent = textInput.value;
  toDoList.appendChild(toDoDiv);
  toDoDiv.appendChild(newLi);
  toDoDiv.appendChild(compBtn);
  toDoDiv.appendChild(trashBtn);


}
