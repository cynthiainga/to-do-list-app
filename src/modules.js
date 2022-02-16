export const todoList = [
  {
    id: 0,
    description: 'Attend morning session',
    completed: true,
  },
  {
    id: 1,
    description: 'Submit the project',
    completed: false,
  },
  {
    id: 2,
    description: 'Make changes to the project',
    completed: true,
  },
  {
    id: 3,
    description: 'Read One Article from the database',
    completed: false,
  },
  {
    id: 4,
    description: 'Attend the standup call at 6p.m',
    completed: false,
  },
  {
    id: 5,
    description: 'Take a rest',
    completed: false,
  },
];

export const todoListElement = document.querySelector('.todo-list');
export const form = document.createElement('form');
export const header = document.createElement('div');
export const headerText = document.createElement('h1');
export const clear = document.createElement('a');
clear.href = '#';
headerText.classList.add('title');
export const headerImg = document.createElement('span');

headerText.innerHTML = "Today's To Do";
headerImg.innerHTML = "<span class='icon'><i class='fa-solid fa-arrows-rotate'></i></span>";
header.classList.add('header');
export const footer = document.createElement('div');
footer.classList.add('myFooter');
clear.innerHTML = 'Clear all completed';

export const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
export const inputTodo = document.createElement('input');
export const refreshImg = document.createElement('i');
refreshImg.style.color = '#928f8f';
inputTodo.placeholder = 'Add to your list...';
export const mainContainer = document.createElement('div');
export const append = () => {
  inputContainer.appendChild(inputTodo);
  inputContainer.appendChild(refreshImg);
  inputTodo.classList.add('input-todo');
  footer.appendChild(clear);
  header.appendChild(headerText);
  header.appendChild(headerImg);
  form.appendChild(header);
  form.appendChild(inputContainer);
  form.classList.add('form');
  mainContainer.classList.add('main-container');
};
