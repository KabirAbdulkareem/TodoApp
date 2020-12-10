/* Helper */
const createElement = (type, className, text) => {
  let element = document.createElement(type);
  if (element.nodeName === "BUTTON") {
    element.setAttribute("data-purpose", className);
  }
  if (className) element.classList.add(className);
  if (text) element.innerText = text;

  return element;
};

const createParagraph = (text, className) => {
  let paragraph = createElement("p", className);
  paragraph.innerText = text;
  return paragraph;
};
const createToDoList = () => {
  let ul = createElement("ul", "todo-list");
  return ul;
};

const createTODO = (text) => {
  let buttonsDiv = createElement("div", "buttons");
  let li = createElement("li", "todo");
  let taskTitle = createParagraph(text);
  let upButton = createElement("button", "up", "Up");
  let downButton = createElement("button", "down", "Down");

  let removeButton = createElement("button", "remove", "Remove");
  buttonsDiv.append(upButton);
  buttonsDiv.append(downButton);
  buttonsDiv.append(removeButton);
  li.append(taskTitle);
  li.append(buttonsDiv);
  return li;
};
let main = document.getElementById("todo-main");
const todoInputField = document.getElementById("todo-input");
const addButton = document.getElementById("add");
const down = document.querySelector(".down");
const up = document.querySelector(".up");

let toDoList;
/* get todoinput */

/*get add button */
let remove = document.querySelector(".remove");

addButton.addEventListener("click", (e) => {
  if (todoInputField.value.length > 0) {
    let todo = createTODO(todoInputField.value);
    if (!main.querySelector(".todo-list")) {
      toDoList = createToDoList();
      toDoList.append(todo);
      document.querySelector(".no-todos").remove();

      main.append(toDoList);
      todoInputField.value = "";
    } else {
      main.querySelector(".todo-list").append(todo);
      main.children[0].classList.add("no-todos-off");
      main.append(toDoList);
      todoInputField.value = "";
    }
  }
});

todoInputField.addEventListener("keyup", (e) => {
  if ((e.keyCode == 13) & (todoInputField.value.length > 0)) {
    let todo = createTODO(todoInputField.value);
    if (!main.querySelector(".todo-list")) {
      toDoList = createToDoList();
      toDoList.append(todo);
      document.querySelector(".no-todos").remove();

      main.append(toDoList);
      todoInputField.value = "";
    } else {
      main.querySelector(".todo-list").append(todo);
      main.children[0].classList.add("no-todos-off");
      main.append(toDoList);
      todoInputField.value = "";
    }
  }
});

main.addEventListener("click", (e) => {
  let buttonType = e.target.getAttribute("data-purpose");

  if (e.target.nodeName == "BUTTON") {
    let targetItem = e.target.parentElement.parentElement;
    let list = targetItem.parentElement;
    let nextItem = targetItem.nextElementSibling;
    let previousItem = targetItem.previousElementSibling;

    if (buttonType === "remove") {
      list.removeChild(targetItem);
    } else if (buttonType === "down") {
      list.removeChild(nextItem);
      list.insertBefore(nextItem, targetItem);
    } else if (buttonType === "up") {
      list.removeChild(targetItem);
      list.insertBefore(targetItem, previousItem);
    }
  }
});

/*document.querySelector("#todo-main").children[0].classList.add("off")*/
/* document.querySelector(".remove").parentElement.parentElement.remove() */
/* document.querySelector(".todo-list").childElementCount */
/* 
script.js:91 button.up 

script.js:93 up
*/
