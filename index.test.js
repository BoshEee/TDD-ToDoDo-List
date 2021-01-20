//Haneen - Add tasks to a list so that I can keep track of them

test("Submitting a new task adds it to the list", (t) => {
    let aInput = document.querySelector(".todo-input");
    aInput.value = "work";
    let submitButton = document.querySelector(".todo-btn");
    submitButton.click();
    let result = document.querySelector(".todo-list");
    console.log(result.textContent);
    t.equal(result.firstChild.firstChild.textContent, "work");

    result.textContent = "";
});

test("Submitting a new task adds it to the list", (t) => {
    let aInput = document.querySelector(".todo-input");
    aInput.value = "play";
    let submitButton = document.querySelector(".todo-btn");
    submitButton.click();
    let result = document.querySelector(".todo-list");
    t.equal(result.firstChild.firstChild.textContent, "play");

    aInput.value = "study";
    submitButton.click();
    t.equal(result.lastChild.firstChild.textContent, "study");
    // result.textContent = "";
});


test("Checking an entry marks it as complete", t => {

    const todos = document.getElementsByClassName("todo");
    todos[0].firstChild.nextSibling.click();
    const actual = document.getElementsByClassName("completed");

    t.equal(actual.length, 1);

    const checked = actual[0].firstChild.textContent;
    t.equal(checked, "play");


});

test("Deleting an entry removes it from the list", t => {
    const todos = document.getElementsByClassName("todo");

    let deleteDiv = todos[0].firstChild.textContent;

    todos[0].lastChild.click();
    let actual = todos.length

    t.equal(actual, 1);

    const newTodos = document.getElementsByClassName("todo");
    let newDiv = todos[0].firstChild.textContent;
    console.log(todos);

    t.notEqual(deleteDiv, newDiv);


});

test("Toggling the filter hides completed tasks from the list", t => {
   
    let compSelect = document.querySelector('.filter-todo');
    compSelect.click();
    let select = compSelect[1].value;
    const todos = document.getElementsByClassName("todo");

    let actual = todos.length;

    t.equal(select, 'completed');
});

test("Toggling the filter hides completed tasks from the list", t => {
   
    let compSelect = document.querySelector('.filter-todo');
    let select = compSelect[1].value;
    const todos = document.getElementsByClassName("todo");

    compSelect.click();

    let actual = todos.length;

    t.equal(select, 'uncompleted');
});