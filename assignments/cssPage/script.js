'using strict'

function toggleNav() {
    console.log('togglin yo')
    const navItems = document.getElementById("nav-items")
    navItems.classList.toggle('hidden')

}

window.onload = function() {
const hamburger = document.getElementById('hamburger')
hamburger.onclick = toggleNav;

}