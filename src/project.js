export default () => {
    const content = document.querySelector(".content");
  
    let projects = document.createElement("div");
    projects.classList.add("project-container");
  
    let subhead = document.createElement("div");
    subhead.classList.add("subhead");
  
    let subheadtext = document.createElement("h4");
    subheadtext.textContent = "My Projects";
  
    content.appendChild(projects);
    projects.appendChild(subhead);
    subhead.appendChild(subheadtext);
  
    const project2 = document.createElement("div");
    subhead.insertAdjacentElement("afterend", project2);
  
    let projectcards = document.createElement("div");
    projectcards.classList.add("add-project-cards");
  
    const plus = document.createElement("h1");
    plus.textContent = "+";
  
    project2.appendChild(projectcards);
    projectcards.appendChild(plus);
  
    return projects; 
  };
  