const todoList = [
  { name: "make dinner", dueDate: "2025-10-24" },
  {
    name: "buy groceries",
    dueDate: "2025-10-12",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div> 
    <div> ${dueDate}</div>
     <button class="deleteBtn" onclick="todoList.splice(${i}, 1); renderTodoList()">Delete</button>`;
    todoListHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-dueDate-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";
  renderTodoList();
}

function pressEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
