// Testing the username
test("SHOWING THE USERNAME", t => {
    window.onload();
    let result = username + "'s To Do List";
    let expected = nameHdr.textContent;
    t.equal(result, expected);
});


// testing to a list so that I can keep track of them

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
    
});

// Testing completed tasks
test("Checking an entry marks it as complete", t => {

    const todos = document.getElementsByClassName("todo");
    todos[0].firstChild.nextSibling.click();
    const actual = document.getElementsByClassName("completed");

    t.equal(actual.length, 1);

    const checked = actual[0].firstChild.textContent;
    t.equal(checked, "play");

});

// Testing deleting tasks
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


// Testing filters
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

// Testing Clearing The List
test("Toggling the filter hides completed tasks from the list", t => {
   
    let beforeList = document.querySelector('.todo-list');
    let beforeClear = beforeList.childNodes;

    clearBtn.click();

    let result = 0;

    t.equal(result, beforeClear.length);
});