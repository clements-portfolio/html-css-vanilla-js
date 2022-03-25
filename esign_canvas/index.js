const canvas = document.getElementById('esign');
const context = canvas.getContext('2d');
const clear = document.getElementById('clear');

let size= 4;
let pressed = false;
let color = 'black'
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    pressed = true;

    x = e.offsetX;
    y = e.offsetY;    
});

canvas.addEventListener('mouseup', (e) => {
    pressed = false;

    x = undefined;
    y = undefined;    
});

canvas.addEventListener('mousemove', (e) => {
    if (pressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
    }

    x = undefined;
    y = undefined;    
});

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

clear.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});