'using strict'

function oldest() {
    let name1 = document.getElementById('name1-txt').value
    let age1 = document.getElementById('age1-txt').value
    let name2 = document.getElementById('name2-txt').value
    let age2 = document.getElementById('age2-txt').value
    let name3 = document.getElementById('name3-txt').value
    let age3 = document.getElementById('age3-txt').value
    let compareAnswer = document.getElementById('compareDisplay')

    if(age1 > age2 && age2 > age3) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name1}, ${name2}, ${name3}`
    }

    else if(age2 > age1 && age1 > age3) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name2}, ${name1}, ${name3}`
    }

    else if(age1 > age3 && age3 > age2) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name1}, ${name3}, ${name2}`
    }

    else if(age2 > age3 && age3 > age1) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name2}, ${name3}, ${name1}`
    }

    else if(age3 > age1 && age1 > age2) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name3}, ${name1}, ${name2}`
    }

    else if(age3 > age2 && age2 > age1) {
        compareAnswer.innerHTML = `From oldest to youngest: ${name3}, ${name2}, ${name1}`
    }

    else {
        console.log('uh-oh something wrong')
    }

}

function languageConverter() {
    let languageSelected = document.getElementById('lang-txt').value
    let languageAnswer = document.getElementById('helloWorldDisplay')

    if(languageSelected = 'French') {
        languageAnswer.innerHTML='Bonjour le monde'
    }
    
    else if(languageSelected = 'German') {
        languageAnswer.innerHTML = 'Hallo Welt'
    }

    else if(languageSelected = 'Spanish') {
        languageAnswer.innerHTML = 'Hola Mundo'
    }

    else if(languageSelected = 'Indonesian') {
        languageAnswer.innerHTML = 'Halo Dunia'
    }
}

function pluralize() {
    let numItems = document.getElementById('itemNum-txt').value
    const itemName = document.getElementById('item-name-txt').value
    let plurAnswer = document.getElementById('plurDisplay')
    
    if(numItems > 1) {
        plurAnswer.innerHTML = `You ordered ${numItems} ${itemName}s`
    }

    else {
        plurAnswer.innerHTML = `You ordered ${numItems} ${itemName}`
    }

}

window.onload = function() {
   const ageButton = document.getElementById('ageButton')
   ageButton.onclick = this.oldest;

   const hwButton = document.getElementById('hello-world-button')
   hwButton.onclick = this.languageConverter


   const pluralizeDisplay = document.getElementById('plur-button')
   pluralizeDisplay.onclick = this.pluralize;


}