async function displayBreweries(){
    let response = await fetch("https://api.openbrewerydb.org/breweries")
    let beersJson = await response.json();
    let contentDiv = document.getElementById("content")

    for(i in beersJson) {
        let beer = beersJson[i]
        contentDiv.append(getBeerItem(beer))
    }

    function getBeerItem(beer) {
        let beerSection = document.createElement('section')
        beerSection.className = "beer"
        let beerTitle = document.createElement('h2')
        beerTitle.innerHTML = beer.name
        beerSection.append(beerTitle)
        beerSection.append(createBeerSection(beer.brewery_type))
        beerSection.append(getAddress(beer))
    }

    function getAddress(beer) {
        let beerSection = document.createElement('section')
        beerSection.className = "beerInfo"
        let beerAddy = document.createElement('p')
        let beerAddyUL = document.createElement('ul')
        let streetName = document.createElement('li')
        let cityName = document.createElement('li')
        let stateName = document.createElement('li')
        let zipcode  = document.createElement('li')
        streetName.innerHTML = beer.street
        cityName.innerHTML = beer.city + ", " + beer.state + ", " + beer.postal_code

        beerAddyUL.append(streetName)
        beerAddyUL.append(cityName)
        

    }

    function createBeerSection(text){
        let beerP = document.createElement('p')
        beerP.innerHTML = text 
        return beerP
    }


}


window.onload = function(){
    this.displayBreweries()

}