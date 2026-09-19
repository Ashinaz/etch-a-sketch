const container = document.querySelector(".container")
const canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
canvas.height = container.offsetHeight
canvas.width = container.offsetWidth

function gridX(num) { 
  for (let i = 0; i < num; i++) {
    let divGrid = document.createElement("div")
    divGrid.classList.toggle("gridX")
    gridY(num, divGrid)
    container.appendChild(divGrid)
  }
}