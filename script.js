

const answer = prompt("Please enter the length of the grid you'd like for the grid box.");


const column = answer; 

const gridBox = document.createElement('div');
gridBox.setAttribute('id', 'gridBox');
gridBox.setAttribute('style', `grid-template-columns: repeat(${column}, 1fr);`);


document.querySelector('body').appendChild(gridBox);


for (let i = 0; i < column ** 2; i++) {

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
