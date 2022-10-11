import checkComplete from "./checkComplete.js";
import trashCan from "./trashCan.js";
import { displayTask } from "./displayTasks.js";
import { uniqueDates } from "../services/date.js";

export const addTask = (event) => {

    event.preventDefault(); // !previene el comportamiento por defecto del formulario, o un objeto en específico (recargar la pagina en este caso)
    
    const list = document.querySelector("[data-list]");
    const inputText = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-calendar]");

    const value = inputText.value;
    inputText.value = "";
    const date = calendar.value;
    calendar.value = "";
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    if(value == "" || date == "") // ! no permite seguir a la función si 
    // ! el usuario no escribe nada en los campos.
    return;
    
    const complete = false;

    const taskObject = { // * es un objeto para almacenar algunos datos
        value, 
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = ""
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObject);

    // * en caso de que el antecedente a || sea null, se le da el valor por defecto
    // * del consecuente al ||.

    // sessionStorage.setItem("tasks", JSON.stringify(taskObject)); // * el primer parametro es una llave
    // * el segundo es el valor de la llave, los datos son guardados mientras
    // * la sesión del usuario en la pagina se mantenga activa (no cierre la pestaña)


    localStorage.setItem("tasks", JSON.stringify(taskList));
    // * la diferencia con el sessionStorage es que se almacena de forma local
    // ! JSON.stringify() convierte el objeto del tipo stringa a JSON
    
    displayTask();
}


export const createTask = ({value, dateFormat, complete, id}) => { 
    // * desestructuración del objeto: obtener valores específicos de un objeto
    
    const task = document.createElement("li");
        task.classList.add("card");

    const taskContent = document.createElement("div");
        taskContent.classList.add("task-container");

    const check = checkComplete(id);

    if (complete){
        check.classList.toggle("fas");    
        check.classList.toggle("far");
    }

    
    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value; // * lo q esta adentro d span lo cambia por value
    
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);

    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
    
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(trashCan(id));

    return task;
}

