const loadSchedule = () => {
    const content = document.querySelector(".content");

    //REPLACE LATER WHEN U LEARN SUM DATABASE USER SHIT
    const scheduleData = {
        Monday: ['', 'lab', '', '', '', ''],
        Tuesday: ['Distrubuted Systems', 'Systems Ergonomics', '', '', '', ''],
        Wednesday: ['', ' Image Processing', '', 'Applied Informatics', 'PBL 5', ''],
        Thursday: ['', 'History of Computing', '', 'lab', '', ''],
        Friday: ['', 'lab', '', 'lab', 'PBL5', '']    
    };

    const scheduleContainer = document.createElement('div');
    scheduleContainer.classList.add("schedule-container");

    let subhead = document.createElement("div");
    subhead.classList.add("subhead");
  
    let subheadtext = document.createElement("h4");
    subheadtext.textContent = "My Schedule";

    const table = document.createElement("table");
    table.className = 'schedule-table';

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Time</th>' + 
        Object.keys(scheduleData).map(day => `<th>${day}</th>`).join('');
    table.appendChild(headerRow);

    const periods = ['1', '2', 'Break', '3', '4', '5'];

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        
        row.innerHTML = `<td class = "periodcell">${periods[i]}</td>` + 
            Object.values(scheduleData).map(day => {
                const cellValue = day[i];
                let cellClass = cellValue === "" ? "taken" : "taken active";  
                if (cellValue === "lab"){
                    cellClass = "taken lab";
                }
                return `<td class="${cellClass}">${cellValue}</td>`;
            }).join('');
        
        table.appendChild(row);
    }

    content.appendChild(scheduleContainer);
    scheduleContainer.appendChild(subhead);
    subhead.appendChild(subheadtext);
    subhead.appendChild(table);

}

export default loadSchedule;