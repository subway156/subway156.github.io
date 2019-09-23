'using strict'

function showMessage() {
    const resultElement = document.getElementById('imBroke')
    const present = document.getElementById('stuff').value

    switch(present) {
        case 'doll':
            resultElement.innerHTML = "Maybe we can get you a doll"
        case 'boat':
            resultElement.innerHTML = "A boat! No way Jose"
        case 'car':
            resultElement.innerHTML = "never a car"
    }


}
window.onload = function(){

    
    const btnDisplay = document.getElementById("btn-display")
    btnDisplay.onclick = this.showMessage
    

}

