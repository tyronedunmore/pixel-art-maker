//form element
const form = document.getElementById('sizePicker');

// Select color input
const colorPicker = document.getElementById('colorPicker');

//Table element
const table = document.querySelector('#pixelCanvas');

//inputHeight & inputheight
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function makeGrid(event) {
    event.preventDefault();  
    table.innerHTML="";
    //creates row that matches value of gridHeight input
    for (let x = 1; x <= gridHeight.value; x++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        
        //creates cell that matches gridwidth input
        for (let i = 1; i <= gridWidth.value; i++) {
            let cell = document.createElement('td');
            row.appendChild(cell);

            //adds listener to each cell and adds color to the cell that was clicked
            cell.addEventListener('click', function () {
                cell.style.backgroundColor = colorPicker.value;
            })
               
        }
      
    }
})
    






