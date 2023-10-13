
let recordTwo = document.getElementById("record-2")
let exiting = document.getElementById("counting-2")
let compute = 0

function exitEnter() {
    compute = compute + 1
    console.log(compute)
    exiting.textContent = compute
}


function saving() {
    let counterStr = compute + " - "

    recordTwo.textContent += counterStr
    exiting.textContent = 0
    count = 0
   
}
