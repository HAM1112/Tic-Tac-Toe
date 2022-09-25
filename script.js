const Gameboard = (() => {
    //let gameboard = ['X','X','O','X','O','O','X','O','X'];
    let gameboard = ['','','','','','','','',''];
    return {gameboard}
})();

//console.log(Gameboard.gameboard)

const player = (namee, symbol)=>{
    let sign = symbol;
    let name = namee;
    return {name, sign}
}

const playerOne = player('Player 1', 'X');
const playerTwo = player('Player 2','O');


//game controller
const gameController = (()=>{
    const {gameboard} = Gameboard
    let symbol = ""
    let change = false;

    const markBox = (e) => {
        change = !change
        //console.log("start symbol:", symbol);
        //console.log(e.target.id);
        //console.log(gameboard[e.target.id]);
        let id_number = lastElement(e.target.id)
        //console.log(id_number);
        let currentArrayIndex = `${gameboard[id_number]}`
        //console.log(currentArrayIndex);
        if(symbol === "")
    }


    // addclick and removeClick
    const boxs = document.querySelectorAll('.box')
    
    function addClick(){
        boxs.forEach((box)=>{
            box.addEventListener('click', markBox)
        })
    }


    addClick()
    return {gameboard}
})()


const renderobj = (()=>{
    const {gameboard} = Gameboard;
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((space, i) => {
        console.log(i);
        space.innerHTML = `${gameboard[i]}`
    })
})








// get last element
function lastElement (str){
    return str[str.length - 1]
}

let testbtn = document.getElementById('test')
testbtn.addEventListener('click',()=>{
    let board = gameController.gameboard
    console.log(board)
})

