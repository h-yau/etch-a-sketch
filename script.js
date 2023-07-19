const formToResize = document.querySelector('#formToResize');
let column = 16;


function clearGame() {
    const cells = document.querySelectorAll('.cells');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

function createGridContainer(dimension) {

    console.log(dimension);
    const gridBox = document.createElement('div');
    gridBox.setAttribute('id', 'gridBox');
    document.querySelector('body').appendChild(gridBox);
}

function createGrid(dimension) {

    const gridBox = document.querySelector('#gridBox');
    gridBox.setAttribute('style', `grid-template-columns: repeat(${dimension}, 1fr);`);
    console.log(dimension);

    for (let i = 0; i < dimension ** 2; i++) {

        const div = document.createElement('div');
        div.setAttribute('class', 'cell');
        gridBox.appendChild(div);

        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = 'black';
        });
    
    }
}

createGridContainer(column);
createGrid(column);

function removeGrid() {
    const gridBox = document.querySelector('#gridBox');
    while(gridBox.firstChild) {
        gridBox.removeChild(gridBox.firstChild);
    }
}

function submitSize(event) {

    event.preventDefault();
    console.log("hello");
    column = formToResize.querySelector('#size').value;
    alert(column);
    clearGame();
    removeGrid();
    createGrid(column);
}

formToResize.addEventListener('submit', submitSize);


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
document.querySelector('body').appendChild(clearButton);

clearButton.addEventListener('click', clearGame);

