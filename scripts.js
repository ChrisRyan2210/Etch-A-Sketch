document.addEventListener("DOMContentLoaded", () => {   

    const container = document.querySelector('.container');
    let divCounter = 0;

    while (divCounter <= 15)  { 

        const newSquareDiv = document.createElement('div');
        newSquareDiv.classList.add('square');  
        container.appendChild(newSquareDiv);    

        divCounter++;
    };
}); 