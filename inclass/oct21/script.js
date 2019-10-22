class Person {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFirstName() {
        return this._firstName;
    }

    getLastName() {
        return this._lastName
    }

    setFirstName(fName) {
        this._firstName=fName
    }
}

me = new Person("Amy", "Anderson")

console.log(me.getFirstName())
console.log(me.getLastName())