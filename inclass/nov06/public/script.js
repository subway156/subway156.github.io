async function showCakes(){
    let response = await fetch('/api/cakes')
    let cakesJSON = await response.json()

    let contentDiv = document.getElementById('content')

    for(i in cakesJSON){
        contentDiv.append(makeCake(cakesJSON[i]))
    }
    
}

function makeCake(cake){
    const cakeElem = document.createElement('div')
    cakeElem.classList.add('cake')
    cakeH2 = document.createElement('h2')
    cakeH2.innerHTML = cake.name
    cakeElem.append(cakeH2)
    cakeP = document.createElement('p')
    cakeP.innerHTML =  `has ${cake.icing} icing and ${cake.tiers} tiers`
    cakeElem.append(cakeP)
    
    
    return cakeElem
}

window.onload = function(){
    this.showCakes()
}