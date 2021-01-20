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
  result.textContent = "";
});


// test("Submitting a new task adds it to the list", (t) => {
//   let aInput = document.querySelector(".todo-input");
//   aInput.value = "work";
//   let submitButton = document.querySelector(".todo-btn");
//   submitButton.click();
//   let result = document.querySelector(".todo-list");
//   t.equal(result.textContent, "work");
//   result.textContent = "";
// });

// test("Submitting a new task adds it to the list", (t) => {
//   let aInput = document.querySelector(".todo-input");
//   aInput.value = "play";
//   let submitButton = document.querySelector(".todo-btn");
//   submitButton.click();
//   let result = document.querySelector(".todo-list");
//   t.equal(result.textContent, "study");
//   result.textContent = "";
// });

// test("Submitting a new task adds it to the list", (t) => {
//   let aInput = document.querySelector(".todo-input");
//   let submitButton = document.querySelector(".todo-btn");
//   let list = document.querySelector(".todo-list");

//   aInput.value = "Work";
//   submitButton.click();

//   const todoItem = document.createElement("li");
//   todoItem.textContent = aInput.value;
//   list.appendChild(todoItem);

//   const actual = list.lastChild.textContent;
//   const expected = "Work";

//   t.equal(actual, expected);

//   list.textContent = "";
//   aInput.value = "";
// });

// test("Submitting a new task adds it to the list", (t) => {
//     let aInput = document.querySelector('.todo-input');
//     let submitButton = document.querySelector('.todo-btn');
//     let list = document.querySelector('.todo-list');

//     aInput.value = 'Work';
//     submitButton.click();

//     const todoItem = document.createElement('li');
//     todoItem.textContent = aInput.value;
//     list.appendChild(todoItem);

//     const actual = list.lastChild.textContent;
//     const expected = 'Work';

//     t.equal(actual, expected);

//     list.textContent = '';
//     aInput.value = '';
// });

