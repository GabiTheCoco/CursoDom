import {createTask} from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTask = () => {
    const list = document.querySelector("[data-list");
    const taskList =  JSON.parse(localStorage.getItem("tasks")) || [];

    const dates = uniqueDates(taskList);
    const order = orderDates(dates);
    dates.forEach(date => {
        list.appendChild(dateElement(date));
        
        const dateMoment = moment(date, "DD/MM/YYYY");

        taskList.forEach( (task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");

            const diff = dateMoment.diff(taskDate);
            // devuelve 0 si son fechas iguales, o un num entero si son distintas
            
            if (diff === 0) // si las fechas son iguales, agregalas debajo de la tarjeta correspondiente
                list.appendChild(createTask(task));
        });

    });

}