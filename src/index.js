import '@fortawesome/fontawesome-free/js/all.js';
import {
  todoList,
  todoListElement,
  form,
  footer,
  mainContainer,
  append,
} from './modules.js';

import('./style.css');

const todo = () => {
  append();
  todoList.forEach((todo) => {
    const todoElement = document.createElement('li');
    const { completed, description } = todo;
    todoElement.innerHTML = `
                  <div class='list-row'>
                    <div class='content'>
                        <input type="checkbox" ${
  completed ? 'checked' : ''
} class='input' />
                        <span>${description}</span>
                    </div>
                   <span class='icon'>
                   <i class="fa-solid fa-ellipsis-vertical"></i>
                   </span>
                    </div>
                    `;
    todoListElement.appendChild(todoElement);
    form.appendChild(todoListElement);
    mainContainer.appendChild(form);
    document.body.appendChild(mainContainer);
  });
  form.insertBefore(footer, form.childNodes[3]);
};

window.addEventListener('DOMContentLoaded', todo);
