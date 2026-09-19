window.addEventListener("load", function () {
  gridX(grid)
  container.addEventListener("mousedown", startDrawing)
  container.addEventListener("mousemove", currentlyDrawing)
  container.addEventListener("mouseup", stopDrawing)
})

const container = document.querySelector(".container")
const canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
canvas.height = container.offsetHeight
canvas.width = container.offsetWidth
let grid = 64

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