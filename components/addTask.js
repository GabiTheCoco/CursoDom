import checkComplete from "./checkComplete.js";
import trashCan from "./trashCan.js";


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

    const taskObject = { // * es un objeto para almacenar algunos datos
        value, 
        dateFormat
    }
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({value, dateFormat});

    // * en caso de que el antecedente a || sea null, se le da el valor por defecto
    // * del consecuente al ||.

    // sessionStorage.setItem("tasks", JSON.stringify(taskObject)); // * el primer parametro es una llave
    // * el segundo es el valor de la llave, los datos son guardados mientras
    // * la sesión del usuario en la pagina se mantenga activa (no cierre la pestaña)


    localStorage.setItem("tasks", JSON.stringify(taskList));
    // * la diferencia con el sessionStorage es que se almacena de forma local
    // ! JSON.stringify() convierte el objeto del tipo stringa a JSON
    
    
    const task = createTask(taskObject);
    list.appendChild(task);
}


export const createTask = ({value, dateFormat}) => { 
    // * desestructuraciónd el objeto: obtener valores específicos de un objeto
    
    const task = document.createElement("li");
        task.classList.add("card");

    const taskContent = document.createElement("div");
        taskContent.classList.add("task-container");
    
    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value; // * lo q esta adentro d span lo cambia por value
    
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);





    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
    
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(trashCan());

    return task;
}

