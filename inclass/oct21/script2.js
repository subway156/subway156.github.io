class Person {
    constructor(firstName, lastName){
    this._firstName = firstName;
    this._lastName = lastName;
    }

    getFirstName() {
        return this._firstName +"*";
    }

    setFirstName(firstName) {
        this._firstName=firstName + "!"
    }
    
}

class MyDate {
    constructor(hour, minute, second){
        this._hour = hour
        this._second = second
        this._minute = minute
    }

    getFormattedDate(){
        return `${this.leadingZero(this._hour)}:${this.leadingZero(this._minute)}:${this.leadingZero(this._second)}`
    }

    leadingZero(data) {
        if(data < 10) {
            return '0'+data;
        }
        return data
    }


}

class Food {
    constructor(name, calories){
    this._name = name
    this._calories = calories
    }

    getFoodName() {
        return this._name
    }
    getCalories() {
        return this._calories
    }

    getTableRow() {
        let trElem = document.createElement("tr")
        let tdNameElem = document.createElement("td")
        let tdCalElem = document.createElement("td")

        tdNameElem.innerHTML=this._name
        tdCalElem.innerHTML=this._calories

        trElem.append(tdNameElem)
        trElem.append(tdCalElem)
        return trElem
    }

}

let tableElem = document.createElement("table")
document.getElebody.append(tableElem)

let foodList = []
foodList.push(new Food("Popcorn", 115))
foodList.push(new Food("Lasagna", 500))
foodList.push(new Food("Candy", 23))
foodList.push(new Food("Banana", 290))

let totalCalories=0
for(food of foodList) {
    console.log(Food.getFoodName)
    totalCalories += food.getCalories()
}
console.log("Calories:" + totalCalories)



me = new Person("Amy", "Smith")
me.firstName = "Bobby"
console.log(me.firstName)



//console.log(getFormattedDate())