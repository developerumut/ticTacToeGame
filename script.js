const whoseMove = document.querySelector('#move');
const boxes = document.querySelector('.container');
const result = document.querySelector('#result');
const reload = document.querySelector('#reload');

let register = 1;
let variable = "X";
let clicked = [];

reload.style.display = 'none';



for (let i = 0; i < 9; i++){
    boxes.children[i].addEventListener('click', main)
}
function main() {
    if(this.classList[1] != "clicking"){
        this.classList.add('clicking');
        console.log("clicked")
        this.children[0].innerText = variable;
        
        row()
        column()
        draw()
        cross()
        if(variable == "X"){
            variable = "O";
            this.children[0].style.color = 'red';
           
        } else {
            variable = "X";
        }
    return whoseMove.innerText = variable + "'s move"; 
    
            
    }else{
        alert("Please choose another box");
    }
}


function row(){
    if (boxes.children[0].textContent == boxes.children[1].textContent && boxes.children[0].textContent == boxes.children[2].textContent && boxes.children[0].textContent !== "") {
        resultFunction()
    }
    if (boxes.children[3].textContent == boxes.children[4].textContent && boxes.children[3].textContent == boxes.children[5].textContent && boxes.children[3].textContent !== "") {
        resultFunction()
    }
    if (boxes.children[6].textContent == boxes.children[7].textContent && boxes.children[6].textContent == boxes.children[8].textContent && boxes.children[6].textContent !== "") {
        resultFunction()
    }
}

function column(){
    if (boxes.children[0].textContent == boxes.children[3].textContent && boxes.children[0].textContent == boxes.children[6].textContent && boxes.children[0].textContent !== "") {
        resultFunction()
    }
    if (boxes.children[1].textContent == boxes.children[4].textContent && boxes.children[1].textContent == boxes.children[7].textContent && boxes.children[1].textContent !== "") {
        resultFunction()
    }
    if (boxes.children[2].textContent == boxes.children[5].textContent && boxes.children[2].textContent == boxes.children[8].textContent && boxes.children[2].textContent !== "") {
        resultFunction()
    }
}

function cross(){
    if (boxes.children[0].textContent == boxes.children[4].textContent && boxes.children[0].textContent == boxes.children[8].textContent && boxes.children[0].textContent !== "") {
        resultFunction()
    }
    
    if (boxes.children[2].textContent == boxes.children[4].textContent && boxes.children[2].textContent == boxes.children[6].textContent && boxes.children[2].textContent !== "") {
        resultFunction()
    }
    
}


function resultFunction(){
    reload.classList.add('display');
    result.classList.add('display');
    result.innerHTML = variable + " " + "Won"
    document.querySelector('.body').style.background = "#E5E5E2";
}

function draw(){
    for (let i = 0; i < 9; i++){
        if(boxes.children[i].classList[1] == 'clicking'){
            register += 1;
            break
        }
    }
    if (register == 10) {
        reload.classList.add('display');
        document.querySelector('.body').style.background = "#E5E5E2";
        result.classList.add('display');
        result.innerText = "Draw"
    }
}

reload.addEventListener('click', function(){
    window.location.reload(false)
})