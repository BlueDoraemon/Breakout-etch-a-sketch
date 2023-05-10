
let gridLength = 16; //set width and length of square grid

//function to create a grid of boxes


//function create row of boxes from input integer with .box styling
function makeGrid(gridLength){ 
    const grid = document.querySelector(".container");
    for (let i = 0; i < gridLength; i++){
        const row = document.createElement(`div`);

        for (let j = 0; j < gridLength; j++) {
  
            const box = document.createElement('div');
            box.classList.add(`box`);
            box.setAttribute('id',`i${i}j${j}`); // set x and y as i and j

            box.addEventListener("mouseover", (e) => {
                box.classList.add('red'); 
            });
            row.appendChild(box);
        }
    grid.appendChild(row);
    }
}

makeGrid(gridLength);


const ball = document.querySelector('.ball');
let x = 7;
let y = 0;
let dx = 1;
let dy = 1;
let intervalId = setInterval(moveBall, 50);

function moveBall() {
    // check if the ball hits the walls
    if (x + dx < 0 || x + dx > 16) {
        dx = -dx;
    }
    if (y + dy < 0 || y + dy > 18.5) {
        dy = -dy;
    }

    // get the current grid item

    let nthX = (x).toFixed(0);
    let nthY = (gridLength-y+2).toFixed(0);
    const currentItem = document.querySelector(`#i${nthX}j${nthY}`);
    
    if (currentItem) {
        if (currentItem.classList.contains(`red`)) {
          dy = -dy;
          currentItem.classList.remove(`red`);
        }
    }
    // update the ball's position and velocity
			x += dx;
			y += dy;
			ball.style.left = `${x * 50}px`;
			ball.style.bottom = `${y * 50}px`;
}
//function to get input from user to create a grid
const myDiv = document.querySelector(".button");

myDiv.addEventListener("click", () => {
  const input = prompt("Enter a grid length: (0-100) ");
  if (input <= 100 && input >=0) {
    gridLength = (+input).toFixed(0);

    const node = document.querySelector('.reset');
    
    const newChild = document.querySelector('.container');

    node.removeChild(newChild);

    const newDiv = document.createElement('div');

    newDiv.classList.add('container');

    node.appendChild(newDiv);

    makeGrid(gridLength);
  }
  else alert(`Try again from 0 - 100`);
});


//function to get key press from 

// function to control the ball