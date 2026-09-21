window.addEventListener("load", function () {
  gridX(grid)
  container.addEventListener("mousedown", startDrawing)
  container.addEventListener("mousemove", currentlyDrawing)
  container.addEventListener("mouseup", stopDrawing)
})

const button = document.querySelector("button")
const container = document.querySelector(".container")
const canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
canvas.height = container.offsetHeight
canvas.width = container.offsetWidth
let grid = 64
let isDrawing = false
let x = 0
let y = 0

function gridX(num) { 
  for (let i = 0; i < num; i++) {
    let divGrid = document.createElement("div")
    divGrid.classList.toggle("gridX")
    gridY(num, divGrid)
    container.appendChild(divGrid)
  }
}

function gridY(num, gridX) {
  for (let i = 0; i < num; i++) {
    let divGrid = document.createElement("div")
    divGrid.classList.toggle("gridY")
    gridX.appendChild(divGrid)
  }
}

function startDrawing(e) {
  x = e.offsetX
  y = e.offsetY
  isDrawing = true
  console.log(x)
  console.log(y)
}

function currentlyDrawing(e) {
  if (isDrawing) {
    draw(context, x, y, e.offsetX, e.offsetY)
    x = e.offsetX
    y = e.offsetY
  }
}

function draw(context, x1, y1, x2, y2) {
  context.beginPath()
  context.strokeStyle = "red"
  context.lineWidth = "10"
  context.lineJoin = "round"
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.stroke()
}

function stopDrawing(e) {
  if (isDrawing) {
    draw(context, x, y, e.offsetX, e.offsetY)
    x = 0
    y = 0
    isDrawing = false
  }
}

button.addEventListener("click", newCanvas)

function newCanvas() {
  let grid = parseInt(prompt("select new grid"))
  let limit = 100
  if (grid < limit) {
    delGrid()
    gridX(grid)
    delCanvas()
    console.log(grid)
  } else {
    grid = (prompt("Please select a grid lower than 100"))
    delGrid()
    gridX(grid)
    delCanvas()
    console.log(grid)
  }
}

function delGrid() {
  const gridDivsX = document.querySelectorAll(".gridX")
  const gridDivsY = document.querySelectorAll(".gridY")
  for (grid of gridDivsX) {
    grid.remove()
  }
  for (grid of gridDivsX) {
    grid.remove()
  }
}

function delCanvas() {
  context.clearRect(0, 0, canvas.height, canvas.width)
}