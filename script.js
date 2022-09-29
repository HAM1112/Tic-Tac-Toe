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
    let sign = ""
    //let change = false;
    const markBox = (e) => {
        //change = !change
        //console.log("start sign:", sign);
        //console.log(e.target.id);
        //console.log(gameboard[e.target.id]);
        let id_number = lastElement(e.target.id)
        //console.log(id_number);
        let currentArrayIndex = `${gameboard[id_number]}`
        //console.log(currentArrayIndex);
        if(sign === ""){
            sign = playerOne.sign;
            //console.log(`${sign} : ${id_number}`);
            //currentArrayIndex = playerOne.sign
            if (currentArrayIndex === '') {gameboard.splice(`${id_number}`,1, sign)}; 
           // removeClick(e)
        }
        else if(sign === playerOne.sign){
            sign = playerTwo.sign
            //console.log(`${sign} : ${id_number}`);
            if (currentArrayIndex === '') {gameboard.splice(`${id_number}`,1, sign)};             
            //removeClick(e)
        }
        else if(sign === playerTwo.sign){
            sign = playerOne.sign
            //console.log(`${sign} : ${id_number}`);
            if (currentArrayIndex === '') {gameboard.splice(`${id_number}`,1, sign)};      
            //removeClick(e)
        }
        
        const {renderobj} = renderAndReset;
        renderobj()
        checkWinner()
    }
    const reset = document.getElementById('resetBtn')
    reset.addEventListener('click',()=>{
        sign = "";
    })

    function checkWinner(){

            //     FIRST ROW
        if(gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[0] !== ""){
            if(gameboard[0] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[0] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick()
            return   
        }
            //      SECOND ROW
        if(gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[3] !== ""){
            if(gameboard[3] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[3] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick() 
            return  
        }
            //      THIRD ROW
        if(gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[6] !== ""){
            if(gameboard[6] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[6] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick() 
            return  
        }
            //    FIRST COLUMN
        if(gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[0] !== ""){
            if(gameboard[0] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[0] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick() 
            return  
        }
            //     SECOND COLUMN
        if(gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] && gameboard[1] !== ""){
            if(gameboard[1] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[1] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick() 
            return  
        }
            //       THIRD COLUMN
        if(gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[2] !== ""){
            if(gameboard[2] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[2] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick()  
            return 
        }

        if(gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[0] !== ""){
            if(gameboard[0] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[0] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick()   
            return
        }

        if(gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[2] !== ""){
            if(gameboard[2] === "X"){
                result.innerHTML = `${playerOne.name} wins`
                //console.log('hello');
            }
            else if(gameboard[2] === "O"){
                 result.innerHTML = `${playerTwo.name} wins`
                //console.log('hello');
            }
            sign = ""
            removeClick() 
            return  
        }
        
    }

    // addclick and removeClick
    const boxs = document.querySelectorAll('.box')
    
    function addClick(){
        boxs.forEach((box)=>{
            box.addEventListener('click', markBox)
        })
    }
    function removeClick(){
        //console.log(e.target);
        boxs.forEach((box)=>{
            box.removeEventListener('click',markBox)
        })
    }

    addClick()
    return {sign,addClick}
})()


const renderAndReset = (()=>{
    const {gameboard} = Gameboard
    const {addClick} = gameController
    function renderobj(){
        //let id_number = lastElement(e.target.id);
        //const boxes = document.querySelectorAll('.box');
        
        for(i = 0 ; i < gameboard.length ; i++){
            const box = document.getElementById(`box${i}`);
            //console.log(`box${i}`);
            box.innerHTML = `${gameboard[i]}`
        }
    }
     
    const reset = document.getElementById('resetBtn');
    reset.addEventListener('click', ()=>{
        for (let i = 0; i < gameboard.length; i++) {
            gameboard[i] = "";
        }
        result.innerHTML = `GOOD LUCK!`
        renderobj()
        addClick()
    })


    return {renderobj,reset}
})()

// get last element
function lastElement (str){
    return str[str.length - 1]
}


