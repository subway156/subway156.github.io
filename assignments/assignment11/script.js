class Book {
    constructor(name, author, genre, datePub, rating){
        this._name = name
        this._author = author
        this._genre = genre
        this._datePub = datePub
        this._rating = rating
    }

    getName() {
        return this._name
    }

    getAuthor() {
        return this._author
    }

    getGenre() {
        return this._genre
    }

    getRating() {
        return this._rating
    }

    getDate() {
        return this._datePub
    }
}

function displayBooks() {  

    let bookList = [] 
    bookList.push(new Book("2666", "Robert Balano", "Contemporary Fiction", 2003, "5 stars"))
    bookList.push(new Book("All about Love", "Bell Hooks", "Romance", 2000, "3 stars"))
    bookList.push(new Book("To Kill a Mockingbird", "Robert Balano", "Contemporary Fiction", 2003, "5 stars"))
    bookList.push(new Book("Harry Potter and the Goblet of Fire", "Robert Balano", "Contemporary Fiction", 2003, "5 stars"))
    bookList.push(new Book("The Hunger Games", "Robert Balano", "Contemporary Fiction", 2003, "5 stars"))

    let imgs = document.getElementsByClassName("bookCovers")
    for(let i=0; i<imgs.length; i++) {
        
        let span = document.createElement("span")
        imgs[i].after(span)
        span.innerHTML = `${bookList[i].getName()} by ${bookList[i].getAuthor()}, genre: ${bookList[i].getGenre()}, 
        written in ${bookList[i].getDate()}, rated ${bookList[i].getRating()}`

    }

    

}

window.onload = function() {
    this.displayBooks()

}