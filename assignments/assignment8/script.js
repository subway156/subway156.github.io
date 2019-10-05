
// loops through length of word and find ascii values
function displayAscii() {
    
    let word = document.getElementById("word-txt").value
    let wordTxt = document.getElementById("ascii-display")
    let string = ""

    for(let i=0; i<word.length; i++) {
        // if last character, add the character without a ","
        if(i == word.length-1){
            string += `${word.charCodeAt(i)} `
            wordTxt.innerHTML= `${string}`
        }

        string += `${word.charCodeAt(i)}, `
    }
}

function sumEvenNumbers() {
    let num = document.getElementById("num-txt").value
    let numDisplay = document.getElementById("num-display")
    let answer = 0
    for(let i=0; i<=num; i+=2) {
        answer+=i
        numDisplay.innerHTML= `Sum: ${answer} `
    }

}

window.onload = function() {
    const asciiBtn = document.getElementById("ascii-btn")
    asciiBtn.onclick = this.displayAscii
    const numbtn = document.getElementById("num-btn")
    numbtn.onclick = this.sumEvenNumbers

}

