const firstName = document.getElementById('firstName').value
const lastName = document.getElementById('lastName').value
const prodName = document.getElementById('prodName').value
const prodCount = document.getElementById('prodCount').value
const prodPrice = document.getElementById('prodPrice').value
const tax = document.getElementById('tax').value

console.log(1.0+tax)
// display
result.textContent = `${firstName} ${lastName} ordered ${prodCount} ${prodName}(s)`
printOut.textContent = `Totalling: ${Math.round(100*(1.0+tax)*prodPrice)/100}  `
