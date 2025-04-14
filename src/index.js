import "./styles.css";
import "./schedule.css"
import "./dialog.css";
import projects from "./project.js";
import loadSchedule from "./timetable.js";
import {showFlexTabs, showGridTab} from "./func.js";

const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.id === 'tab1'){ showGridTab();}
        else{ showFlexTabs(); }
    })
})

// tab1 = projects
const tab1 = document.querySelector("#tab1");

tab1.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    

    projects();
})

// tab2 = schedule
const tab2 = document.querySelector("#tab2");

tab2.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    loadSchedule();
})



