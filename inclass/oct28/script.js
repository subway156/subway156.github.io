async function special(){
    console.log("Beginning of special")
    let result = await setTimeout(doStuff, 2000)
    console.log("Ending of special")

}

function doStuff() {
    console.log("In do stuff!")
}

window.onload = function() {
    this.console.log("Before Calling Special")
    this.special()
    this.console.log("After calling special")
}
