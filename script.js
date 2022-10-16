// we want to initialize the red ball we created
let red_ball = document.querySelector('.ball');
red_ball.addEventListener('dragstart', dragInit);

// create a function that will handle the drag start
function dragInit(e){
    // set data
    
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(()=>{
        e.target.classList.add('hideElement');
    }, 0);
}

// now lets make the target box accessible
let boxes = document.querySelectorAll('.box');
// loop over them and apply events
boxes.forEach(box => {
    box.addEventListener('dragenter', dragBallIn);
    box.addEventListener('dragover', dragBallOver);
    box.addEventListener('dragleave', dragBallOut);
    box.addEventListener('drop', dropBall);
});

function dragBallIn(e){
    // we have to use the css style created earlier
    e.preventDefault();
    e.target.classList.add('dragged-over');
}

function dragBallOver(e){
    e.preventDefault();
    e.target.classList.add('dragged-over');
}

function dragBallOut(e){
    e.target.classList.remove('dragged-over');
}

function dropBall(e){
    e.target.classList.remove('dragged-over');

    // we want to drop the dragged element
    let getElementData = e.dataTransfer.getData('text/plain'); //to get the data of the element
    let id = document.getElementById(getElementData);
    e.target.appendChild(id);
    id.classList.remove('hideElement');
}
