const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clocks = document.querySelector("#clock");
const todo = document.querySelector("#todo-form");
const weather = document.querySelector("#weather");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// const loginLink = document.querySelector("a");

function onSubmitButton(event) {
  event.preventDefault();
  //event에 대한 기본 동작이 일어나지 않도록 ex) form이 submit하면 자동 새로고침
  const username = loginInput.value;
  console.log(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //greeting.innerText = "Hello " + username;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  //const length = username.length;
  //console.log(username);
}
function paintGreetings(username){
  greeting.innerText = `Have a nice day, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clocks.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLinkButton(event) {
  event.preventDefault();
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitButton);
} else {
  paintGreetings(savedUserName);
}

// loginLink.addEventListener("click", onLinkButton);
