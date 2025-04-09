import "./styles.css";
import "./schedule.css"
import projects from "./project.js";
import loadSchedule from "./timetable.js";


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

