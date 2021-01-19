//Haneen - Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", (t) => {
  let aInput = document.querySelector(".todo-input");
  aInput.value = "work";
  let submitButton = document.querySelector(".todo-btn");
  submitButton.click();
  let result = document.querySelector(".todo-list");
  t.equal(result.textContent, "work");
  result.textContent = "";
});

test("Submitting a new task adds it to the list", (t) => {
  let aInput = document.querySelector(".todo-input");
  aInput.value = "play";
  let submitButton = document.querySelector(".todo-btn");
  submitButton.click();
  let result = document.querySelector(".todo-list");
  t.equal(result.textContent, "study");
  result.textContent = "";
});
