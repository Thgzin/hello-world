const todoList = ["make dinner", "wash dishes", "buy groceries"];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHtml += html;
  }

  document.querySelector(".todoText").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const todoName = inputElement.value;

  todoList.push(todoName);
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
