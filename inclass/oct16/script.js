function highlightCell(event) {

    let callerName = event.target.tagName
 
        // for anything other than a table cell get out
    if(callerName.toLowerCase() != "td") return 

    // highlight cell 
    event.target.classList.toggle("highlight")
}

function unHighlightCell(event) {

    let callerName = event.target.tagName
 
        // for anything other than a table cell get out
    if(callerName.toLowerCase() != "td") return 

    // highlight cell 
    event.target.classList.remove("highlight")
}

function showAnimals() {
    let animalTDs = document.querySelectorAll("#animal-table td");
    let p=document.createElement("p")
    this.after(p)

    for(let animalTD of animalTDs) {
        p.innerHTML += animalTD.innerHTML + ", "
    }

}

function stylePara() {
    let p = document.querySelector(".special");
    p.classList.toggle("highlight");
}



window.onload = function() {
    let animalTable = document.getElementById("animal-table")
    animalTable.addEventListener("mouseover", highlightCell)
    animalTable.onmouseout = unHighlightCell
    document.getElementById("btn-show").addEventListener("click", showAnimals)
    document.getElementById("btn-style").addEventListener("click", stylePara)
    this.setInterval(stylePara,1000)


}