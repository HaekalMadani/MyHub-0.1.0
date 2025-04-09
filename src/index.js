import "./styles.css";
import about from "./dashboard.js";

const tab1 = document.querySelector("#tab1");

tab1.addEventListener("click", () => {
    about();
})