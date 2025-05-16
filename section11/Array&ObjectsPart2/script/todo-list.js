let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div> 
    <div> ${dueDate}</div>
     <button class="deleteBtn" onclick="todoList.splice(${i}, 1); renderTodoList(); saveStorage()" >Delete</button>`;
    todoListHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-dueDate-input");
  const dueDate = dateInputElement.value;

  verifyEmptyInput(name, dueDate);
  if (name.trim() === "" || dueDate.trim() === "") {
    return;
  } else {
    todoList.push({ name, dueDate });

    inputElement.value = "";
    saveStorage();

    renderTodoList();
  }
}

function pressEnter(event) {
  if (event.key === "Enter") {
    addTodo();
    saveStorage();
  }
}

function saveStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function verifyEmptyInput(name, dueDate) {
  const error = document.querySelector(".js-error");

  if (name.trim() === "" || dueDate.trim() === "") {
    error.innerHTML = "Preencha todos os campos.";
  } else {
    error.innerHTML = "";
  }
}
