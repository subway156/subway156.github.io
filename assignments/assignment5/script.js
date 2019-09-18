'using strict'

const myElement=document.getElementById('div')
const userName = prompt('Enter your name');
const numCoffee = prompt('How many coffees would you like to order?')
const tip = prompt('What is your tip?')

myElement.innerHTML=`${userName} ordered ${numCoffee} coffees. Your total is ${((numCoffee * 2) *1.07) + tip}`
