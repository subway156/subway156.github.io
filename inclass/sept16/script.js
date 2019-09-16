'using strict'
/* comment 
 const userName = prompt('enter your name');
 alert( `hi ${userName}`);
*/
const myP = document.getElementById("target");
const penguin = document.getElementById('item1')
const moose = document.getElementById('item2')
const deer = document.getElementById('item3')

myP.innerHTML = 'HI ME';
deer.innerHTML='Deer'
moose.innerHTML='Moose'
penguin.innerHTML='Penguin'

const catFam1 = prompt('enter the name of cat 1!')
const catFam2 = prompt('enter the name of cat 2!')
const catFam = document.getElementById('catFam')
catFam.innerHTML=`My cats are named ${catFam1} and ${catFam2}`