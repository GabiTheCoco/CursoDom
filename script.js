const btnAgregar = document.querySelector("[data-form-btn]"); 

/* 
* es un data atrribute, ayuda para no perder la referencia a un elemento 
* si se le cambia la clase en un futuro.
*/


const createTask = (evento) => { 
    evento.preventDefault(); // !previene el comportamiento por defecto del formulario, o un objeto en específico (recargar la pagina en este caso)
    const inputText = document.querySelector("[data-form-input]");
    console.log(inputText.value);
}



// ? arrow functions, o funciones anónimas
btnAgregar.addEventListener("click",  createTask);
