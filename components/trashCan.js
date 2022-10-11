import { displayTask } from "./displayTasks.js";

const trashCan = (id) => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");

    i.addEventListener("click", () => removeCard(id));

    return i;
}

const removeCard = (id) => {

    const list = document.querySelector("[data-list]");

    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( (t) => t.id === id);

    tasks.splice(index, 1);

    list.innerHTML = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();


}

export default trashCan;