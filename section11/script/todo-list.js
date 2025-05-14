const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const todoName = inputElement.value;

  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = "";
}
