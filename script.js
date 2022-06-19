let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleBtn = document.getElementById("doubleBtn")

function showDisplayButton(){
    rollBtn.style.display ="none"
    resetBtn.style.display = "block"
    doubleBtn.style.display= "none"
}

function randomRoll(){
    return Math.floor(Math.random()* 6) + 1
}

function randomRollDoubleOrZero(){
    return randomNumberDouble = Math.floor(Math.random()* 7) 
    console.log(randomNumberDouble)
}

function player1DisplayScore(randomNumber){
    player1Dice.textContent = randomNumber
    player1Scoreboard.textContent = (player1Score += randomNumber)
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent =  "Player 2's turn"
}

function player2DisplayScore(randomNumber){
    player2Dice.textContent = randomNumber
    player2Scoreboard.textContent = (player2Score += randomNumber)
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent =  "Player 1's turn"
}

doubleBtn.addEventListener("click", function(){
    let randomNumber1 = randomRollDoubleOrZero()
    let randomNumber = randomNumber1 * 2
    if (player1Turn){
       player1DisplayScore(randomNumber)
       
    }
    else {
        player2DisplayScore(randomNumber)

    }
    checkResultAndPlayerTurn()
})

function checkResultAndPlayerTurn(){
    if (player1Score >= 20){
        message.textContent = "Player1 has won "
        showDisplayButton()

    } else if (player2Score >=20){
        message.textContent = "Player 2 has won "
        showDisplayButton()
    }
    player1Turn = !player1Turn
}

rollBtn.addEventListener("click", function(){
const  randomNumber = randomRoll()
if (player1Turn) {
    player1DisplayScore(randomNumber)
}
else{
    player2DisplayScore(randomNumber)
    }
   checkResultAndPlayerTurn()
})



resetBtn.addEventListener("click", function(){
    reset()
})

function reset(){
    player2Score = 0
    player1Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 turn"
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    doubleBtn.style.display= "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

