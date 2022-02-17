import '@fortawesome/fontawesome-free/js/all.js';
import { todoList, todoListElement } from './modules.js';

import('./style.css');

const todo = () => {
  todoList.forEach((todo) => {
    const { completed, description } = todo;
    const todoElement = document.createElement('li');
    let list = '';
    list += `
                    <div class='content'>
                       <input type="checkbox" ${
  completed ? 'checked' : ''
} class='input' />
                        <span>${description}</span>
                    </div>
                   <span class='icon'>
                   <i class="fa-solid fa-ellipsis-vertical"></i>
                   </span>
                    `;
    todoElement.innerHTML = list;
    todoElement.classList.add('list-row');
    todoListElement.appendChild(todoElement);
  });
};

window.addEventListener('DOMContentLoaded', todo);
