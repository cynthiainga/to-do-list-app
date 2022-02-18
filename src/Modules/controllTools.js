/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */

import { getTask } from "./data.js";

export function deleteTask() {
  const clearTask = document.querySelector(".clear-task");
  clearTask.addEventListener("click", () => {
    if (getTask().length > 0) {
      const filterCompliteTask = getTask().filter(
        (task) => task.completed !== true
      );
      localStorage.setItem("Task-list", JSON.stringify(filterCompliteTask));
      location.reload();
    }
  });
}

export function addTask() {
  class Task {
    constructor(description) {
      this.description = description;
      this.index = new Date();
      this.completed = false;
    }
  }
  const addTaskForm = document.querySelector("#add-task");
  const data = JSON.parse(localStorage.getItem("Task-list")) || [];
  addTaskForm.addEventListener("submit", () => {
    const inputTaskValue = document.querySelector("#add-task-input").value;
    if (inputTaskValue === "") return;
    const newTask = new Task(inputTaskValue);
    data.push(newTask);
    localStorage.setItem("Task-list", JSON.stringify(data));
  });
  return data;
}

export function deleteOne(deleteIcon, taskId) {
  deleteIcon.addEventListener("click", () => {
    const filteredTask = getTask().filter((task) => task.index !== taskId);
    localStorage.setItem("Task-list", JSON.stringify(filteredTask));
    location.reload();
  });
}
