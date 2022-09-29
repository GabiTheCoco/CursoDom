import checkComplete from "./components/checkComplete.js";
import trashCan from "./components/trashCan.js";



    
const btnAgregar = document.querySelector("[data-form-btn]"); 

/* 
* es un data atrribute, ayuda para no perder la referencia a un elemento 
* si se le cambia la clase en un futuro.
*/


const createTask = (evento) => { 

    evento.preventDefault(); // !previene el comportamiento por defecto del formulario, o un objeto en específico (recargar la pagina en este caso)
    const inputText = document.querySelector("[data-form-input]");
    const value = inputText.value;
    inputText.value = "";
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");


    const taskContent = document.createElement("div");
    taskContent.classList.add("task-container");
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value; // * lo q esta adentro d span lo cambia por value
    
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

/*
    * esto se llama string template, es una propieda de JS que permite
    * guardar un elmento html y poder utilizarlo con variables de JS
    * como se muestra en la línea 18
*/

    // task.innerHTML = content;  * lo q esta adentro d task cambia a content.
    task.appendChild(taskContent)
    task.appendChild(trashCan());
    list.appendChild(task);
}


// ? arrow functions, o funciones anónimas
btnAgregar.addEventListener("click",  createTask);

    

    
/*
    ! se define todo el codigo como una IIFE (funcion ejecutadas inmediatamente)
    ! se ejecutan cuando son definidas directamente

    * esto sirve para ocultar las funciones y los elementos sensibles al usuario
    * previniendo brechas de seguridad al acceder a datos que no tienen que acceder
    * dentro del scope gobal, esto se soluciona ejecutando todo dentro de un scope
    * de la funcion ejecutada directamente en su definción
*/