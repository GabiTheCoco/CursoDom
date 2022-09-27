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

    const content = ` <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  /*
    * esto se llama string template, es una propieda de JS que permite
    * guardar un elmento html y poder utilizarlo con variables de JS
    * como se muestra en la línea 18
  */

    task.innerHTML = content; // * lo q esta adentro d task cambia a content.
    list.appendChild(task);
    console.log(content);
}



// ? arrow functions, o funciones anónimas
btnAgregar.addEventListener("click",  createTask);
