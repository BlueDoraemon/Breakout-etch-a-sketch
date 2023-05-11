
let gridLength = 16; //set width and length of square grid
let xZero = 0;
let yZero = 0;
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
    xZero = grid.getBoundingClientRect().left;
    yZero = grid.getBoundingClientRect().bottom;
}

makeGrid(gridLength);
console.log(yZero);
console.log(xZero);     

const ball = document.querySelector('.ball');
let x = xZero;
let y = yZero-50;
let dx = 50;
let dy = 25;
let intervalId = setInterval(moveBall, 50);

function moveBall() {
    // check if the ball hits the walls
    if (x + dx < 50 || x + dx > (50 * gridLength)-25) {
        dx = -dx;
    }
    if (y + dy < 43 + 25|| y + dy > ((50 * gridLength) + 43 -25)){
        dy = -dy;
    }

    // get the current grid item

    let nthX = Math.floor(x / 50)
   
    let nthY = Math.floor(((gridLength * 50)-y)/50);
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
			ball.style.left = `${x}px`;
			ball.style.bottom = `${y}px`;
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
    x = xZero;
    y = yZero-50;

    console.log(yZero);

    const bod = document.querySelector(`body`);
  }
  else {
    alert(`Try again from 0 - 100`);
    const node = document.querySelector('.reset');
    
    const newChild = document.querySelector('.container');

    node.removeChild(newChild);

    const newDiv = document.createElement('div');

    newDiv.classList.add('container');

    node.appendChild(newDiv);

    makeGrid(gridLength);
    x = xZero;
    y = yZero-50;

    console.log(yZero);

    const bod = document.querySelector(`body`);
    }
});



//Add function open github and mouseover border style

const gitlink = document.querySelector('.header');

gitlink.addEventListener("click", (e)=>{
    window.open('https://github.com/BlueDoraemon/Breakout-etch-a-sketch', '_blank');
});

gitlink.addEventListener("mouseover", (e) =>{
    gitlink.classList.add('hover');
    document.body.style.cursor = 'pointer';
});

gitlink.addEventListener("mouseout", (e) =>{
    gitlink.classList.remove('hover');
    document.body.style.cursor = 'default';
});
//Do the same for reset button
const resetHover = document.querySelector('.button');

resetHover.addEventListener("mouseover", (e) =>{
    resetHover.classList.add('hover');
    document.body.style.cursor = 'pointer';
});

resetHover.addEventListener("mouseout", (e) =>{
    resetHover.classList.remove('hover');
    document.body.style.cursor = 'default';
});