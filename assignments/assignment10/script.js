function lottery(){
    let test = document.createElement("span")


    let lottoNum = document.getElementsByClassName("num-txt")
    

    let winningNum = [Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1)]
    let winningNumString = ""
    for(let i=0; i<lottoNum.length; i++) {
        winningNumString += winningNum[i].toString()
        if(winningNum[i]==lottoNum[i]){

        }
    }  
    document.getElementById("num-display").innerHTML = winningNumString
    document.getElementById("message-txt").innerHTML = "Better luck next time"


}

function quotes(){
    let quoteBox = ["The unhappy derive comfort from the misfortunes of others.— Aesop", "It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will. — L.M. Montgomery", "Life is really simple, but we insist on making it complicated.", "When we are in love we seem to ourselves quite different from what we were before.", "Life without love is like a tree without blossoms or fruit." ]
    let quoteTxt = document.getElementById("quote-txt")
    quoteTxt.innerHTML = quoteBox[Math.floor(Math.random()*4+1)]
}

window.onload = function() {
    this.document.getElementById("lottery-btn").onclick = lottery 
    this.quotes() //  makes sure a quote is on the page from the start
    this.setInterval(this.quotes,2000) //set interval for 2 sec



}