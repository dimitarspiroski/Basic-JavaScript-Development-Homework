// [Selectors]
let columnNumber = document.querySelector("#column-number");
let rowNumber = document.querySelector("#row-number");
let submitBtn = document.querySelector("#submit-btn");
let table = document.querySelector("#table-container");

// [Functions]
function createTable(rows, columns) {
  let tableBody = document.createElement("tbody");
  for (let r = 1; r <= rows; r++) {
    let row = document.createElement("tr");
    for (let c = 1; c <= columns; c++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(`Row ${r}, Column ${c}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  table.setAttribute("border", "2");
  cleanUpInputs();
}

function cleanUpInputs() {
  rowNumber.value = "";
  columnNumber.value = "";
}

// [Event Handlers]
submitBtn.addEventListener("click", function () {
  table.innerHTML = "";
  createTable(rowNumber.value, columnNumber.value);
});
