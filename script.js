window.addEventListener("load", function () {
  gridX(grid)
  container.addEventListener("mousedown", startDrawing)
  container.addEventListener("mousemove", currentlyDrawing)
  container.addEventListener("mouseup", stopDrawing)
  drawMode.addEventListener("click", toggleCanvas)
  button.addEventListener("click", newCanvas)
  fillDivs()
})

function fillDivs() {
  const grids = document.querySelectorAll(".gridY")
  console.log(grids)
  for(const grid of grids) {
  grid.addEventListener("mousedown", startFill)
  grid.addEventListener("mouseover", isFilling)
  grid.addEventListener("mouseup", stopFilling)
}
}

function toggleCanvas() {
  canvas.classList.toggle("turnOffCanvas")
  newCanvas()
}

const drawMode = document.querySelector("#drawMode")
const button = document.querySelector("button")
const container = document.querySelector(".container")
const canvas = document.querySelector(".canvas")
const context = canvas.getContext("2d")
canvas.height = container.offsetHeight
canvas.width = container.offsetWidth
let grid = 64
let isDrawing = false
let x = 0
let y = 0
let isFill = false

function randomColor() {
  return "#" + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, "0")
}

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

function startFill() {
  isFill = true
  console.log(isFill)
}

function isFilling(e) {
  if(isFill) {
    e.target.style.backgroundColor = randomColor()
  }
}

function stopFilling() {
  isFill = false
}

function startDrawing(e) {
  x = e.offsetX
  y = e.offsetY
  isDrawing = true
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
  for (grid of gridDivsX) {
    grid.remove()
  }
}

function delCanvas() {
  context.clearRect(0, 0, canvas.height, canvas.width)
}