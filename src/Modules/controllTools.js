import { filter } from "lodash";
import { checkbox, editTask } from "../index.js";
import { getTask } from "./data.js";

const updateIndex = (arr) => {
  arr.forEach((task, index) => {
    task.index = index + 1;
  });
};

export const deleteTask = () => {
  const clearTask = document.querySelector(".clear-task");
  clearTask.addEventListener("click", () => {
    if (getTask().length > 0) {
      const filterCompliteTask = getTask().filter(
        (task) => task.completed !== true
      );
      localStorage.setItem("Task-list", JSON.stringify(filterCompliteTask));
      window.location.reload();
    }
  });
};

export const addTask = () => {
  class Task {
    constructor(description) {
      this.description = description;
      this.index = getTask().length + 1;
      this.completed = false;
    }
  }
  const addTaskForm = document.querySelector("#add-task");
  const data = JSON.parse(localStorage.getItem("Task-list")) || [];
  addTaskForm.addEventListener("click", () => {
    const inputTaskValue = document.querySelector("#add-task-input").value;
    if (inputTaskValue === "") return;
    const newTask = new Task(inputTaskValue);
    data.push(newTask);
    localStorage.setItem("Task-list", JSON.stringify(data));
  });
  return data;
};

export const deleteOne = (deleteIcon, taskId) => {
  deleteIcon.addEventListener("click", () => {
    // const filteredTask = getTask().filter((task) => task.index !== taskId);
    const filteredTask = getTask();
    filteredTask.forEach((task, index) => {
      if (index === parseInt(taskId, 10) - 1) {
        filteredTask.splice(index, 1);
      }
    });
    updateIndex(filteredTask);
    localStorage.setItem("Task-list", JSON.stringify(filteredTask));
    window.location.reload();
  });
};

export const updateTask = () => {
  checkbox.forEach((check) => {
    check.addEventListener("click", () => {
      editTask.forEach((task) => {
        if (check.id === task.dataset.indexNumber) {
          getTask().forEach((item) => {
            if (item.index === check.id) {
              if (item.completed) {
                item.completed = false;
                localStorage.setItem("Task-list", JSON.stringify(getTask()));
                window.location.reload();
              } else {
                item.completed = true;
                localStorage.setItem("Task-list", JSON.stringify(getTask()));
                window.location.reload();
              }
            }
          });
        }
      });
    });
  });
};
