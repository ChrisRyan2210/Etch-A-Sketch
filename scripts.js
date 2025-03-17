//load the 16 divs
document.addEventListener("DOMContentLoaded", () => {   

    const container = document.querySelector('.container');
    let divCounter = 0;

    while (divCounter <= 15)  { 

        const newSquareDiv = document.createElement('div');
        newSquareDiv.classList.add('square');  
        container.appendChild(newSquareDiv);    

        divCounter++;
    };

    // add hover effect eventListener
    const squares = document.querySelectorAll('.square');

    squares.forEach((hoveredSquare) => {
        //mouse enter event
        hoveredSquare.addEventListener('mouseenter', () => {

            hoveredSquare.classList.remove('square');
            hoveredSquare.classList.add('hovered-square');
        });
        //mouse leave event
        hoveredSquare.addEventListener('mouseleave', () => {
        
            hoveredSquare.classList.remove('hovered-square');
            hoveredSquare.classList.add('square');
        });
        //drawing event
        hoveredSquare.addEventListener('mousemove', (e) => {
            
            const drawDiv = document.createElement('div');
            drawDiv.classList.add('pen-trail');

            const x = e.clientX;
            const y = e.clientY; //gets y position of mouse
            drawDiv.style.left = `${x}px`;
            drawDiv.style.top = `${y}px`;

            hoveredSquare.appendChild(drawDiv);
        });
    });
}); 

