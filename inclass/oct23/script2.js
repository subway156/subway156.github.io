function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHello() = function(){
        alert("Hello " + this.firstName + "  " + this.lastName)
    }
}
let fName = prompt("enter first name")
let lName = prompt("enter last name")

let me = new Person(fName, lName)
//console.log("Person is " + me.firstName)
me.sayHello();

class Circle {
    constructor(radius){
        this._radius = radius
    }

    this.getArea = function(){
        return this.Math.PI * this.Math.pow(this.radius, 2)
    }

    this.getPerimeter = function(){
        return 2*this.Math.PI * radius;
    }
}


