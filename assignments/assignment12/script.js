async function displayMovies() {
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json")
    let moviesJson = await response.json()
    let contentDiv = document.getElementById("content")

    for(i in moviesJson){
        let movie = moviesJson[i]
        contentDiv.append(getMovieItem(movie))
    }

}

function getMovieItem(movie){

    let movieSection = document.createElement("section")
    movieSection.className = "movie"

    let movieTitle = document.createElement("h3")
    movieSection.append(movieTitle)
    movieTitle.innerHTML = movie.title
    movieSection.append(createShoeObject('Director ' + movie.director))
    movieSection.append(createShoeObject('Actors: ' + movie.actors))
    movieSection.append(createShoeObject('Year: ' + movie.year))
    movieSection.append(createShoeObject('Genre: ' + movie.genres))
    movieSection.append(createShoeObject('Description: ' + movie.description))
    // img

    return movieSection;
}

function createShoeObject(text) {
    let movieObj = document.createElement('p')
    movieObj.innerHTML = text
    return movieObj
}






window.onload = function() {
    this.displayMovies()
}