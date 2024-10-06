
const generateButton = document.querySelector("button");
const rowCountElement = document.getElementById("rivit"); 
const jokerTable = document.getElementById("jokertable"); 

let rowCount = 0;

generateButton.addEventListener("click", function() {
    addJokerRow();
});

function addJokerRow() {
    const newRow = document.createElement("tr");

    
    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement("td"); 
        newCell.textContent = Math.floor(Math.random() * 10); 
        newRow.appendChild(newCell); 
    }

    jokerTable.appendChild(newRow); 

    rowCount++;
    rowCountElement.textContent = rowCount; 
}
