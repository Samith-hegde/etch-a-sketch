// Cache DOM Elements
const sizeInput = document.getElementById('size');
const container = document.getElementById('container');
const resizing = document.getElementById('resizing');
const resetButton = document.getElementById('reset');
const resizeButton = document.getElementById('resize');
const submitButton = document.getElementById('submit');
const coloringButton = document.getElementById('coloring');
const darkeningButton = document.getElementById('darkening');
let colorTrack = 0;

// Resizing div initially hidden
resizing.style.display = 'none';

// Function to create grid
function addGrid(gridSize) {
    container.innerHTML = ''; // Clear existing grid
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

// Function to change color of cell on mouseover
function handleMouseOver(e) {
    if (e.target.classList.contains('cell')) {
        if (colorTrack === 0) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = '#' + randomColor;
        } else {
            let currentColor = e.target.style.backgroundColor;
            if (currentColor === 'white') {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            } else {
                let currentAlpha = parseFloat(currentColor.slice(-4, -1));
                if (currentAlpha < 1) {
                    currentAlpha += 0.1;
                    e.target.style.backgroundColor = currentColor.slice(0, -4) + currentAlpha + ')';
                }
            }
        }
        
    }
}

// Function to reset grid
function handleResetButton() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

// Function to display resizing div
function handleResizeButton() {
    resizing.style.display = 'block';
}

// Function to handle submit button
function handleSubmitButton() {
    const size = sizeInput.value;
    addGrid(size);
    resizing.style.display = 'none';
}

// Initial grid
document.addEventListener('DOMContentLoaded', function() {
    addGrid(16);
});

// Function to change grid function to coloring
function handleColoringButton() {
    colorTrack = 0;
}

function handleDarkeningButton() {
    colorTrack = 1;
}

// Event Listeners
container.addEventListener('mouseover', handleMouseOver);
resetButton.addEventListener('click', handleResetButton);
resizeButton.addEventListener('click', handleResizeButton);
submitButton.addEventListener('click', handleSubmitButton);
coloringButton.addEventListener('click', handleColoringButton);
darkeningButton.addEventListener('click', handleDarkeningButton);