let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#res-btn');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let hide = document.querySelector('.hide');
let main = document.querySelector('.main');
let count = 0;
let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = ()=>{
    turnX = true;
    enableBox();
    msgContainer.classList.add('hide');
    count = 0;
}


boxes.forEach((box)=>{
    box.addEventListener('click', () => {
        if(turnX){
            box.innerText = 'X'
            box.style.color = 'red';
            turnX = false;
        }else{
            box.innerText = 'O'
            box.style.color = 'green';
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
        // count++
        // console.log(count);
    });
    
});

const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};


const noWinner = ()=>{
    msg.innerText = `It was a draw`
    msgContainer.classList.remove('hide');
    disabledBox();

};



const showWinner = (winner)=>{
    msg.innerText = `Congratulation the winner is ${winner}`
    msgContainer.classList.remove('hide');
    disabledBox();
};


const checkWinner = ()=>{
    count++;
    for (let pattern of winPatterns){
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;      
        if(post1Val != '' && post2Val != '' && post3Val != ''){
             if(post1Val === post2Val && post2Val === post3Val && post3Val === post1Val ){
                showWinner(post1Val);
                return;
            }
        }
    }
    if(count === 9 ){
        noWinner();
    }
}

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);


