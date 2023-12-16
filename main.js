// let grid;
// let cell;
let rowDiv;
// let cancelled = false;

const genDivs = (rows, columns) =>{
    const grid = document.querySelector('#grid-wrapper');
    // creating rows
    for (i = 0; i<rows; i++){
        rowDiv = document.createElement('div');
        rowDiv.className = 'row-div';
        //creating columns
        for (j = 0; j<columns; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            rowDiv.appendChild(cell);
            
            cell.addEventListener('mouseover', () => {
                hoverOverCell(cell);
            });
            // cell.addEventListener('mouseout', () => {
            //     hoverOutCell(cell);
            // });
        };
        grid.appendChild(rowDiv);
   };
   grid.generatedGrid = true;
//    return rows;
};



const hoverOverCell = (cell) => {
    // cell.setAtribute('style', 'background-color: #0000;');
    cell.style.backgroundColor = 'black';
};

// const hoverOutCell = (cell) => {
//     cell.style.backgroundColor = 'white';

// };

const deleteGrid = () => {
    const grid = document.querySelector('#grid-wrapper');
    if(grid.generatedGrid) {
        grid.innerHTML = '';
        grid.generatedGrid = false;
    };
    changeGrid();
};

const changeGrid = () => {
    let gridSize = prompt('Please enter grid size');
    if(gridSize > 100 || gridSize < 16){
        prompt('Please enter grid size');
        // return gridSize;
    }else{
        let rows  = gridSize;
        let columns = gridSize;
        genDivs(rows, columns);
    };
};

genDivs(16, 16);