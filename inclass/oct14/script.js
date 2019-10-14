function array() {
    let foods = ["popcorn", "cherries"]
    let arrUl = document.createElement("ul")
    this.after(arrUl)

    for(let i=0; i<foods.length; i++) {
        let arrLi = document.createElement("li")
        arrLi.innerHTML = `${foods[i]}`
        arrUl.appendChild(arrLi)
    }

    // other way using for each
    /* for (let item of foods) {   
        let li < create li
        arrUl.append(li)
        li.innerhtml = "item"
    }

    */
}

function listParagraph() {
    let foodPs = document.getElementsByClassName("food")
    let listP = document.createElement("p")
    this.after(listP)

    listP.innerHTML = "I like "

    for(let foodElem of foodPs)  {
        listP.innerHTML += foodElem.innerHTML + " "        
    }

} 

function showRandomFood() {
    let pElem = document.createElement("p")
    let num = Math.floor(Math.random()*10+1)
    this.after(pElem)

    pElem.innerHTML = `test ${num}`


}

window.onload = function(){
    const arrayBtn = document.getElementById("arr-btn")
    arrayBtn.onclick = array

    const listBtn = document.getElementById("list")
    listBtn.onclick = listParagraph

    const ranBtn = document.getElementById("random-food")
    ranBtn.onclick = showRandomFood
}