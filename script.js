let size;
const container = document.getElementById('container');

const resizing = document.getElementById('resizing');
resizing.style.display = 'none';

function addGrid(gridSize) {
    container.innerHTML = '';
    for (let i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j=0; j<gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    addGrid(16);
}
)

container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('cell')) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    }
})

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
})

const resizeButton = document.getElementById('resize');

resizeButton.addEventListener('click', function() {
    resizing.style.display = 'block';
})

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function() {
    size = document.getElementById('size').value;
    addGrid(size);
    resizing.style.display = 'none';
})