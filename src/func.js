const content = document.querySelector('.content');

// When the special tab is opened
function showGridTab() {
  content.classList.add('grid-layout');
}

// When switching back to other tabs
function showFlexTabs() {
  content.classList.remove('grid-layout');
}

// Handles the project dialogs
function projectDialog() {
  let activator = document.querySelector('.add-project-cards')

  activator.addEventListener('click', () => {
    const createDialog = document.createElement("dialog");
    const createForm = document.createElement("form");

    createForm.innerHTML = `
    <div id="title">
      <h1>Create a Project</h1>
    </div>

    <div class="label">
    <label for="projectName">Project Name: </label>
    </div>

    <div class="input">
    <input type="text" id="projectName" name="projectName" required>
    </div>

    <div class="label">
    <label for="projectType">Project Type: </label>
    </div>

    <div class="input">
      <select id="projectType" name="projectType" required>
      <option value="web">Web Development</option>
      <option value="mobile">Mobile Development</option>
      <option value="data">Data Science</option>
    </select>
    </div>

    <div class="label">
    <label for="ProjectDesc">Project Description: </label>
    </div>
        
    <div class="input">
    <input type="text" id="ProjectDesc" name="ProjectDesc" required>
    </div>

    <div class="label">
    <label for="githubLink">GitHub Link:</label>
    </div>
        
    <div class="input">
    <input type="url" id="githubLink" name="githubLink">
    </div>    

    <div id="formbutton">
    <button type="submit" id="submitDialog">Submit</button>
    <button type="button" id="closeDialog">Cancel</button>
    </div>
    
  `;

    document.body.appendChild(createDialog)
    createDialog.appendChild(createForm)

    createDialog.showModal();

    createForm.querySelector('#closeDialog').addEventListener('click', () => {
      createDialog.close();
      createDialog.remove();
    })

    // Handling the submit
    createForm.addEventListener('submit', (e) =>{
      e.preventDefault();

      const projectName = createForm.querySelector('#projectName').value;

      const newCard = document.createElement('div');
      newCard.classList.add("project-cards");
      newCard.textContent = projectName;

      const cardContainer = activator.parentElement;
      cardContainer.insertBefore(newCard, activator);

      createDialog.close();
      createDialog.remove();
    })
  })
}

function todoDialog() {
  let activator = document. querySelector('.addbutton');

  activator.addEventListener('click', () => {
    const createDialog = document.createElement("dialog");
    const createForm = document.createElement("form");

    createForm.innerHTML = `
    <label for="todoName">To-Do Name:</label>
    <input type="text" id="todoName" name="todoName" required>
    <button type="submit">Submit</button>
    <button type="button" id="closeDialog">Cancel</button>`
    document.body.appendChild(createDialog);
  createDialog.appendChild(createForm);

  createDialog.showModal();

  // close
  createForm.querySelector('#closeDialog').addEventListener('click', () => {
    createDialog.close();
    createDialog.remove(); 

  })

  // submit

  createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todoName = createForm.querySelector('#todoName').value;
    const newTodo = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    newTodo.classList.add("todo-cards");
    newTodo.textContent = todoName;

    const todoContainer = activator.parentElement;
    todoContainer.insertBefore(newTodo, activator);
    newTodo.appendChild(checkbox);

    createDialog.close();
    createDialog.remove();

  })
  })

  
}

export {showFlexTabs, showGridTab, projectDialog, todoDialog};