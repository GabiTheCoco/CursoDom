

export default  (date) => { // ! va a exportar una función directamente.
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.innerHTML = date;

    return dateElement;
}

// * este archivo va a ser importado en ./readTask.js para su uso.