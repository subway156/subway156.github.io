// loop from 1-10 and display numbers in the console
function displayCount() {
    let ul = document.createElement('ul')
    document.getElementById('content').appendChild(ul)


    let num = 1;
while (num <= 10) {
    li = document.createElement("li")
    console.log(`${num} `)
    li.innerHTML=`${num}`
    num++
    ul.appendChild(li)
}


}

function displayLinks() {
   let links = document.getElementById('links')
    
    for(let i=1; i<=5; i++) {
        console.log(i);

        a = document.createElement('a')
        links.append(a)
        a.innerHTML = `Page ${i}`
        a.href=`#${i}`

    }
}

function multiply() {
    let tableElem = document.createElement("table")
    this.after(tableElem)

    for(let row=1; row<=10; row++) {
        let tr = document.createElement('tr')
        tableElem.append(tr)

        for(let col=1; col<=10; col++) {
            let tableCol = document.createElement("td")
            tableElem.append(tableCol)
            tableCol.innerHTML = row*col
        }


   
    }

}
window.onload = function() {
    this.displayCount();
    this.displayLinks();
    this.multiply();

    let multBtn = document.getElementById("mult-btn")
    multBtn.onclick = multiply

}

