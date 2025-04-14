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
    <label for="projectName">Project Name:</label>
    <input type="text" id="projectName" name="projectName" required>
    <button type="submit">Submit</button>
    <button type="button" id="closeDialog">Cancel</button>
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

export {showFlexTabs, showGridTab, projectDialog};