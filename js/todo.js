const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDosKey = "todos"
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  savedToDos();
}



function savedToDos() {
  localStorage.setItem(toDosKey, JSON.stringify(toDos)); // JSON.parse()
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.className = "todo__li"
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.className = "todo__span"
  const button = document.createElement("button");
  button.className = "todo__btn"
  button.innerText = "X";
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDos();
}

// function sayHello(item) {
//   console.log("This is the turn of ", item);
// }

toDoForm.addEventListener('submit', handleToDoSubmit);

const saveToDos = localStorage.getItem(toDosKey);

if(saveToDos !== null){
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  // parsedToDos.forEach(sayHello); // 아래와 같은 코드
  // parsedToDos.forEach((item) => console.log("This is the turn of ", item));
  parsedToDos.forEach(paintToDo);
}