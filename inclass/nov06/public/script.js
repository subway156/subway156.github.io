async function showCakes(){
    let response = await fetch('/api/cakes')
    let cakesJSON = await response.json()
    console.log(cakesJSON)
}

window.onload = function(){
    this.showCakes()
}