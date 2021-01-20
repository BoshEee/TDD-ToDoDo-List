let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
addBtn.addEventListener("click", add);


function add(event) {
    event.preventDefault();
    let toDoDiv = document.createElement("div");
    let newLi = document.createElement("li");
    let compBtn = document.createElement("button");
    toDoDiv.classList.add("todo");
    let trashBtn = document.createElement("button");

    compBtn.innerHTML = '<i class="fas fa-check"></i>';
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    compBtn.addEventListener("click", check);

    function check(event) {
        event.preventDefault();
        newLi.style.textDecoration = "line-through";
        toDoDiv.classList.toggle("checkstyle");
    }

    trashBtn.addEventListener("click", deleted);

    function deleted(event) {
        event.preventDefault();
        toDoDiv.remove();
        // toDoDiv.classList.toggle("delete");
    }




    newLi.textContent = textInput.value;
    toDoList.appendChild(toDoDiv);
    toDoDiv.appendChild(newLi);
    toDoDiv.appendChild(compBtn);
    toDoDiv.appendChild(trashBtn);


}