# etch-a-sketch

## How to solve the problem of creating a grid?

### How to create the first axis of the grid?
 - Create a function that accepts a number
 - That number will serve as our grid number/how many grids the canvas is
 - We use that number in a for loop 
 - Inside the loop it creates a div element, toggles a class for it, and appends it to the container class
 - This creates the first axis of the grid

### How to create the opposing axis to complete the grid canvas?
 - This problem is pretty simple. You just create a function that accepts the number and grid of the first function
 - Using those two you use the same for loop from the first grid function
 - The difference is you append this node as the child of the first grid
 - So essentially what is happening is each loop creates an entire column/row when both functions are applied

