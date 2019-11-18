async function showCars(){
    let carsJson = await fetch('/api/cars')
    let cars = await carsJson.json()
    let carsDiv = document.getElementById('cars')
    console.log(cars)

    for(i in cars){
        carsDiv.append(getCarElem(cars[i]))
    }
}

async function addCar(){
    // get the car information
    const carName = document.getElementById('txt-new-car-name').value
    const carHp = document.getElementById('txt-new-car-hp').value
    const carPrice = document.getElementById('txt-new-car-price').value

    console.log(`you are adding ${carName}, ${carHp}, ${carPrice}`)
    
    let car = {'name': carName, 'hp': carHp, 'price': carPrice}
        
    let response = await fetch('/api/cars', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset-utf-8'
        },
        body: JSON.stringify(car)
    })

    let result = await response.json()
    console.log(result)

}

async function editCar(){
//  TODO
}

async function deleteCar(){
    // TODO
}

function getCarElem(car){
    let carDiv = document.createElement("div")
    carDiv.classList.add('car')
    let carTitle = document.createElement('h3')
    carTitle.innerHTML = car.name

    let carP = document.createElement('p')
    carP.innerHTML = `hp: ${car.hp}, price ${car.price}`
    carDiv.append(carTitle)
    carDiv.append(carP)
    
    return carDiv
}

window.onload = function(){
    this.showCars();
    let addCarButton = this.document.getElementById('btn-add-car')
    addCarButton.onclick = this.addCar

    let editCarButton = this.document.getElementById('btn-edit-car')
    editCarButton.onclick = this.editCar

    let deleteCarButton = this.document.getElementById('btn-delete-car')
    deleteCarButton.onclick = this.deleteCar
}