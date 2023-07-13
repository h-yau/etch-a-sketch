
const COLUMN = 16; 

const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
gridBox.setAttribute('style', `grid-template-columns: repeat(${COLUMN}, 1fr);`);


document.querySelector('body').appendChild(gridBox);


for (let i = 0; i < COLUMN ** 2; i++) {

    const div = document.createElement('div');
    div.setAttribute('class', 'cell');

    gridBox.appendChild(div);

}


const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = 'black';
    });
});
