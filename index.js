let textInput = document.querySelector(".todo-input");
let toDoList = document.querySelector(".todo-list");
let addBtn = document.querySelector(".todo-btn");
let filterSelect = document.querySelector('.filter-todo');


addBtn.addEventListener("click", add);
filterSelect.addEventListener("click", filterTodo);

function add(event) {
    event.preventDefault();
    
    let toDoDiv = document.createElement("div");
    let newLi = document.createElement("li");
    let compBtn = document.createElement("button");
    let trashBtn = document.createElement("button");

    toDoDiv.classList.add("todo");
    compBtn.classList.add('comp-Btn');
    newLi.classList.add('todo-item');
    trashBtn.classList.add('trash-Btn');

    compBtn.innerHTML = '<i class="fas fa-check"></i>';
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    compBtn.addEventListener("click", check);

    function check(event) {
        event.preventDefault();
        toDoDiv.classList.toggle("completed");
    }

    trashBtn.addEventListener("click", deleted);

    function deleted(event) {
        event.preventDefault();
        toDoDiv.remove();
    }

    newLi.textContent = textInput.value;

    toDoList.appendChild(toDoDiv);
    toDoDiv.appendChild(newLi);
    toDoDiv.appendChild(compBtn);
    toDoDiv.appendChild(trashBtn);

    textInput.value = "";
}

// Filter Function

function filterTodo(event) {
    const todos = toDoList.childNodes;

    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}