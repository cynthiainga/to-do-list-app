import"./style.css";import storage from"./storage.js";import taskActions from"./taskActions.js";import dom from"./dom.js";import task from"./Task.js";const form=document.getElementById("form"),todoTextInput=document.getElementById("add-book"),getDefaultTasks=()=>{const t=task.get(),s=storage.get("tasks");s?(s.map((t=>task.add(t))),dom.renderTasks(s)):(storage.set("tasks",t),dom.renderTasks(t))};form.addEventListener("submit",(t=>{t.preventDefault();const s=taskActions.addTask(todoTextInput.value);task.add(s);const e=task.get();dom.renderTasks(e),todoTextInput.value=""})),getDefaultTasks(),dom.updateUI(storage.get("tasks")),dom.showTrashIcon(),dom.editTastSubmit(task),dom.completeTaskHandler(),dom.deleteTaskHandler(),dom.clearCompletedHandler();