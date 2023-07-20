const formToResize = document.querySelector('#formToResize');
let column = 16;


function clearGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

function createGridContainer(dimension) {

    const gridBox = document.createElement('div');
    gridBox.setAttribute('id', 'gridBox');
    document.querySelector('body').appendChild(gridBox);
}

function createGrid(dimension) {

    const gridBox = document.querySelector('#gridBox');
    gridBox.setAttribute('style', `grid-template-columns: repeat(${dimension}, 1fr);`);

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

function checkInput(input) {
    const form = document.querySelector('#formToResize');
    let alertMessage = document.querySelector('#alertMessage');
    if (!(Number.isInteger(input) && input > 0)) {

        if (alertMessage === null) {
            alertMessage = document.createElement('p');
            alertMessage.setAttribute('id', 'alertMessage');
            form.appendChild(alertMessage);
        }

        alertMessage.textContent = 'Invalid input. Please try again!';
        return false;
    }

    if (!(input <= 100)) {
        if (alertMessage === null) {
            alertMessage = document.createElement('p');
            alertMessage.setAttribute('id', 'alertMessage');
            form.appendChild(alertMessage);
        }

        alertMessage.textContent = 'That\'s too big! Try a smaller number.';
        return false;
    }

    if (alertMessage !== null) {
        alertMessage.remove();
    }
    return true;
}

function submitSize(event) {

    event.preventDefault();
    column = Math.floor(formToResize.querySelector('#size').value);
    if (checkInput(column)) {
        clearGame();
        removeGrid();
        createGrid(column);
    }
}

formToResize.addEventListener('submit', submitSize);


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
document.querySelector('body').appendChild(clearButton);

clearButton.addEventListener('click', clearGame);

