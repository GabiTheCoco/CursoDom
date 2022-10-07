import {addTask} from "./components/addTask.js";
import { readTask } from "./components/readTasks.js";

    
const btnAgregar = document.querySelector("[data-form-btn]"); 

/* 
* es un data atrribute, ayuda para no perder la referencia a un elemento 
* si se le cambia la clase en un futuro.
*/



// ? arrow functions, o funciones anónimas
btnAgregar.addEventListener("click",  addTask);

readTask();

    
/*
    ! se define todo el codigo como una IIFE (funcion ejecutadas inmediatamente)
    ! se ejecutan cuando son definidas directamente

    * esto sirve para ocultar las funciones y los elementos sensibles al usuario
    * previniendo brechas de seguridad al acceder a datos que no tienen que acceder
    * dentro del scope gobal, esto se soluciona ejecutando todo dentro de un scope
    * de la funcion ejecutada directamente en su definción
*/