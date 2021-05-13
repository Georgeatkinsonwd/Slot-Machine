document.querySelector('#spinButton').addEventListener('click', spinWheel)
document.querySelector('#bet5').addEventListener('click',bet5)
document.querySelector('#bet15').addEventListener('click',bet15)
document.querySelector('#reset').addEventListener('click',reset)
const cherry = "https://clipartion.com/wp-content/uploads/2015/11/cartoon-cherries.png"
const bar = "https://cdn4.iconfinder.com/data/icons/slot-machines/512/One_Bar-512.png"
const seven = "https://pngimg.com/uploads/number7/number7_PNG18644.png"
const bell = "https://clipartix.com/wp-content/uploads/2016/09/Bell-clipart-mart.png"
const horseShoe = "https://image.flaticon.com/icons/png/512/218/218371.png"

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
    document.querySelector('#slotOne').src = ""
    document.querySelector('#slotTwo').src = ""
    document.querySelector('#slotThree').src = ""
}

function bet5 () {
    yourBet += 5
    yourCoins = Number(localStorage.getItem('coins')) - 5
    let coins = Number(localStorage.getItem('coins'))
    coins = coins - 5
    localStorage.setItem('coins',coins)
    document.querySelector('#showCoins').innerHTML = yourCoins
    document.querySelector('#betCount').innerHTML = yourBet
}

function bet15 () {
    yourBet += 15
    yourCoins = Number(localStorage.getItem('coins')) - 15
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
    document.querySelector('#slotOne').src = slotOne
    document.querySelector('#slotTwo').src = slotTwo
    document.querySelector('#slotThree').src = slotThree

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
        if (random <= 0.2) {
            return bar
        }
        else if (random <= 0.4) {
            return cherry
        }
        else if (random <= 0.6) {
            return seven
        }
        else if (random <= 0.8) {
            return bell
        }
        else if(random <=1) {
            return horseShoe
        }
    }
