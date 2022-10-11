

const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");

    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
}

const completeTask = (event, id) => {
    const element = event.target;
    element.classList.toggle("fas");    
    element.classList.toggle("far");

    // console.log("id", id);

    const tasks = JSON.parse(localStorage.getItem("tasks"));

    const index = tasks.findIndex(item => item.id === id);
    //busca la posición del arreglo que conicida con el id buscado

    tasks[index].complete = !tasks[index].complete;

    localStorage.setItem("tasks", JSON.stringify(tasks));
    //se guarda en el localStorage el arreglo modificado
}

export default checkComplete;