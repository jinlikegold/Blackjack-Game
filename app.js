let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let player = {
    name: "Jin",
    chips: 200
}
let greeting = ""
let greetingEl = document.getElementById("greeting-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1  
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    runGame()
}

function runGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
            greeting = "Do you want to draw a new card?"
        } else if (sum === 21) {
            greeting = "You've got Blackjack!"
            hasBlackJack = true
        } else {
            greeting = "You're out of the game!"
            isAlive = false
        }

    greetingEl.textContent = greeting
}

function newCard() {
    if(hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        runGame()
    }
}