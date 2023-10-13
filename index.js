
let recordEl = document.getElementById("record-el")
let countEntering = document.getElementById("counting")
let resetEl = document.getElementById("reset-el")
let count = 0
let countName = count + " " + "-"


function enterExit() {
    count = count + 1
    console.log(count)
    countEntering.textContent = count
}

function save() {
    let countStr = count + " - "

    recordEl.textContent += countStr
    countEntering.textContent = 0
    count = 0

}



