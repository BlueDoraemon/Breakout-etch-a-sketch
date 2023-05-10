
let gridLength = 16; //set width and length of square grid

//function to create a grid of boxes


//function create row of boxes from input integer with .box styling
function makeGrid(gridLength){ 
    const grid = document.querySelector(".container");
    for (let i = 0; i < gridLength; i++){
        const row = document.createElement(`div`);

        for (let i = 0; i < gridLength; i++) {
  
            const box = document.createElement('div');
            box.classList.add(`box`);
            row.appendChild(box);
        }
    grid.appendChild(row);
    }
}

makeGrid(gridLength);

//function to get input from user to create a grid

//function to get key press from 

// function to control the ball