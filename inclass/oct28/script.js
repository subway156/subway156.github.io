async function displayShoe() {
    let response = await fetch("https://jdanker.github.io/inclass/oct28/shoe.json")
    let shoeJson = await response.json();

    let shoeName = shoeJson.name;
    let shoeBrand = shoeJson.brand
    let reviews = shoeJson.comments
    
    console.log(`${shoeName} by ${shoeBrand}`)

    for(i in reviews) {
        let comments = document.createElement("p")

        comments.innerHTML = reviews[i]
    }

    let section = document.createElement("section")
    section.innerHTML = `${shoeName} by ${shoeBrand}`
    let content =  document.getElementById("content")
    content.append(section)


}

window.onload = function() {
    this.displayShoe()
    let content = this.document.getElementById("content")
    let h1 = document.createElement("h1")
    content.append(h1)
    h1.innerHTML= "I love shoes"

}