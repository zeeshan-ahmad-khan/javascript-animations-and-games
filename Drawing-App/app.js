/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

const paintBtn = document.querySelector('.paint')
const eraseBtn = document.querySelector('.erase')
const brush = document.getElementById("brushSize")

const WIDTH = canvas.width = 700;
const HEIGHT = canvas.height = 650;

// checking button is "paint" clicked or "erase" is clicked
let painting = true;
let erasing = false;
// checking if drawing or erasing
let isDrawing = false;
let isErasing = false;
// for increasing brush size
let brushSize = 10

function main() {
    brush.addEventListener('input', (e) => {
        brushSize = e.target.value;
    })
    paintBtn.addEventListener('click', () => {
        painting = true;
        erasing = false;
    })
    eraseBtn.addEventListener('click', () => {
        painting = false;
        erasing = true;
    })

    // controlling if it is painting or erasing
    canvas.addEventListener('mousedown', () => {
        isDrawing = painting ? true : false;
        isErasing = erasing ? true : false;
    })
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        isErasing = false;
    })

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            ctx.fillStyle = "white";
            ctx.beginPath()
            ctx.arc(e.offsetX, e.offsetY, brushSize, 0, 2 * Math.PI)
            ctx.fill()
        }
        if (isErasing) {
            ctx.fillStyle = "black";
            ctx.beginPath()
            ctx.arc(e.offsetX, e.offsetY, brushSize, 0, 2 * Math.PI)
            ctx.fill()
        }
    })
}

main();