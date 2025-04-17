import { projectDialog } from './func.js';
import { todoDialog } from './func.js';

export {projectDialog} from './func.js'

export default () => {
    const content = document.querySelector(".content");
  
    let projects = document.createElement("div");
    projects.classList.add("project-container");
  
    let subhead = document.createElement("div");
    subhead.classList.add("subhead");
  
    let subheadtext = document.createElement("h4");
    subheadtext.textContent = "My Projects";

    //----------------------DEV----------------------------//
    let devbutton = document.createElement('button');
    devbutton.classList.add("devbtn");
    devbutton.textContent = "delete hist. (dev)"
    

    subhead.appendChild(devbutton);
    //----------------------------------------------------//
  
    content.appendChild(projects);
    projects.appendChild(subhead);
    subhead.appendChild(subheadtext);
  
    const project2 = document.createElement("div");
    project2.classList.add('card-container')


    
    subhead.insertAdjacentElement("afterend", project2);
  
    let projectcards = document.createElement("div");
    projectcards.classList.add("add-project-cards");
  
    const plus = document.createElement("h1");
    plus.textContent = "+";
  
    project2.appendChild(projectcards);
    projectcards.appendChild(plus);

      // Load from localStorage and render
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

    savedProjects.forEach((proj) => {
    const newCard = document.createElement('div');
    newCard.classList.add("project-cards");
    newCard.innerHTML = `
      <h3>${proj.name}</h3>
      <p>${proj.type}</p>
     `;
    project2.insertBefore(newCard, projectcards); // insert before the "+" card
    });

    //-----------------------util ----------------------------//

    const util = document.createElement("div")
    util.classList.add('util')

    const todo = document.createElement("div");
    todo.classList.add('todo');

    let subhead2 = document.createElement("div");
    subhead2.classList.add("subhead");

    let subheadtext2 = document.createElement("h4");
    subheadtext2.textContent = "To-Do-List";

    const list = document.createElement('div');
    list.classList.add('list')

    let addlist = document.createElement("div");
    addlist.classList.add("add-list");

    const addbutton = document.createElement('button');
    addbutton.classList.add("addbutton")
    addbutton.textContent = "Add To-Do"

    projects.insertAdjacentElement("afterend", util);
    util.appendChild(todo);
    todo.appendChild(subhead2);
    subhead2.appendChild(subheadtext2);
    subhead2.insertAdjacentElement('afterend', list)
    list.appendChild(addlist);
    addlist.appendChild(addbutton)

    projectDialog();
    todoDialog();

    return projects; 
  };
  