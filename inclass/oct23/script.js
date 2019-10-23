function example() {
// let person = new Object()
// let person = {}
let person = {
    firstname: "Amy",
    lastName: "Smith",
    age: 20,
    hobbies: ["reading", "learning", "studying"],  // array
    sayHello() {
        console.log("Hello " + this.firstname)
    }
}



console.log(person.firstname + "  " + person.lastName)

// get a key from the user and display the value 
let key = "firstName"
console.log(person[key])
console.log(person["lastName"])

// loop through the keys
for(key in person){
   // console.log(key)
   //this will get values
   console.log(key + " : " + person[key])
}

}


function menuPrice() {
    let MenuItem = {
    cheese: 3,
    banana: 2,
    OJ: 5 
    }
    let sum = 0
    for(item in MenuItem){
        sum+=MenuItem[item]
    }

    console.log("Total is: " + sum)

}

window.onload = function() {
    this.menuPrice()
    this.example()
}