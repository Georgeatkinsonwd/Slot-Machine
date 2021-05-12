document.querySelector('#spinButton').addEventListener('click', spinWheel)
document.querySelector('#bet5').addEventListener('click',bet5)
document.querySelector('#bet15').addEventListener('click',bet15)
document.querySelector('#reset').addEventListener('click',reset)
let yourCoins = Number(localStorage.getItem('coins'))
let yourBet = 0
document.querySelector('#showCoins').innerHTML = yourCoins
document.querySelector('#betCount').innerHTML = yourBet

if (!localStorage.getItem('coins')){
    localStorage.setItem('coins',500)
}

function reset () {
    localStorage.coins = 500
    yourBet = 0
    document.querySelector('#showCoins').innerHTML = Number(localStorage.getItem('coins'))
    document.querySelector('#betCount').innerHTML = yourBet
}

function bet5 () {
    yourBet += 5
    yourCoins -= 5
    let coins = Number(localStorage.getItem('coins'))
    coins = coins - 5
    localStorage.setItem('coins',coins)
    document.querySelector('#showCoins').innerHTML = yourCoins
    document.querySelector('#betCount').innerHTML = yourBet
}

function bet15 () {
    yourBet += 15
    yourCoins -= 15
    let coins = Number(localStorage.getItem('coins'))
    coins = coins - 15
    localStorage.setItem('coins',coins)
    document.querySelector('#showCoins').innerHTML = yourCoins
    document.querySelector('#betCount').innerHTML = yourBet
}
   
function spinWheel(){
    let slotOne = wheelOne()
    let slotTwo = wheelOne()
    let slotThree = wheelOne()
    document.querySelector('#slotOne').innerHTML = slotOne
    document.querySelector('#slotTwo').innerHTML = slotTwo
    document.querySelector('#slotThree').innerHTML = slotThree

    if (slotOne === slotTwo && slotOne === slotThree){
        alert("YOU WIN")
        let coins = Number(localStorage.getItem('coins'))
        coins = coins + (yourBet * 5)
        localStorage.setItem('coins',coins)
        document.querySelector('#showCoins').innerHTML = coins

    }

    yourBet = 0
    document.querySelector('#betCount').innerHTML = yourBet
}

    function wheelOne() {
        let random = Math.random()
        if (random <= 0.99) {
            return "BAR"
        }
        else if (random <= 0.4) {
            return "Cherry"
        }
        else if (random <= 0.6) {
            return "7"
        }
        else if (random <= 0.8) {
            return "Bell"
        }
        else if(random <=1) {
            return "Horse Shoe"
        }
    }
