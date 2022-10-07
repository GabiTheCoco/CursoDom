import {addTask, createTask} from "./addTask.js";

export const readTask = () => {
    const list = document.querySelector("[data-list");
    const taskList =  JSON.parse(localStorage.getItem("tasks")) || [];

    
    taskList.forEach( (task) => {
        list.appendChild(createTask(task));

    });
}