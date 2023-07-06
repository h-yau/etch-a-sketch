const container = document.createElement('div');
container.setAttribute('id', 'gridContainer');

document.querySelector('body').appendChild(container);

for (let i = 0; i < 16; i++) {

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'pixel');

        row.appendChild(div);
    }
}