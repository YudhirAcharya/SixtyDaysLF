let cartEl = document.getElementById("cart-btn")
let Msg = document.getElementById("msg")
let winsEl =document.getElementById("wins")
let lossEl = document.getElementById("loss")
let tiesEl = document.getElementById("tie")
let youEl = document.getElementById("you")
let computerEl = document.getElementById("computer")

let score =0;
let wins =0;
let loss = 0;
let ties =0;

let computerHand
let yourHand
function play()
{
    let randomNum = Math.random()
    if (randomNum<1/3)
    {
        computerHand = "ROCK"
        
    }
    else if(randomNum>1/3 && randomNum<2/3)
    {
        computerHand="PAPER"
    }
    else if(randomNum>2/3)
    {
        computerHand="SCISSORS"
    }
    console.log("geeting random")
    computerEl.innerText ="Computer : "+computerHand
    finalResult(computerHand,yourHand)
}

function btn1(){
    youEl.innerText="You : ROCK"
    const yourHand = "ROCK"
    finalResult(computerHand,yourHand)
    
}
function btn2(){
    youEl.innerText="You : PAPER"
    const yourHand= "PAPER"
    finalResult(computerHand,yourHand)
}
function btn3(){
    youEl.innerText="You : SCISSORS"
    const yourHand ="SCISSORS"
    finalResult(computerHand,yourHand)
}

function finalResult(computerHand, yourHand)
{
    
    if(computerHand =="ROCK" && yourHand == "PAPER")
    {
        console.log("you win")
        wins++
        
    }
    else if((computerHand=="ROCK") && (yourHand =="SCISSORS"))
    {
        loss++
        console.log("you lost")
    }
    else if(computerHand=="PAPER" && yourHand =="ROCK")
    {
        loss++
        console.log("you lost")
    }
    else if(computerHand=="PAPER" && yourHand =="SCISSORS")
    {
        wins++
        console.log("you win")
    }
    else if(computerHand=="SCISSORS" && yourHand =="PAPER")
    {
        loss++
        console.log("you lost")
    }
    else if(computerHand=="SCISSORS" && yourHand =="ROCK")
    {
        wins++
        console.log("you win")
    }
    else if(computerHand == yourHand)
    {
        ties++
        console.log("tiee")
    }

    winsEl.innerText="Wins:"+wins
    lossEl.innerText="Loss:"+loss;
    tiesEl.innerText="Ties:"+ties
    
}

function reset(){
    wins =0;
    loss=0;
    ties=0;
    location.reload()

}

