

const trashCan = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");

    i.addEventListener("click", removeCard);

    return i;
}

const removeCard = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}

export default trashCan;