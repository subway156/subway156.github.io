'using strict'

function toggleNav() {
    console.log('togglin yo')
    const navItems = document.getElementById("navitems")
    navItems.classList.toggle('hidden')

}

function expandParagraph() {
    const moreInfoP = document.getElementById('more-info')
    moreInfoP.hidden = !moreInfoP.hidden;

    return false;
}

function ValidateFirstName() {
    // if error is showing remove it
    let errorSpan =document.getElementById('error-first-name')

    if(errorSpan != null) {
        errorSpan.remove();
    }

    if(this.value.trim() == '') {
        const errorSpan = document.createElement("span");
        errorSpan.id="error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error")
        this.after(errorSpan);    
    }
}

window.onload = function() {
    const hamburger = document.getElementById('hamburger')
    hamburger.onclick = toggleNav;

    // hide more info paragraph on page load
    
    const moreInfoP = document.getElementById('more-info')
    moreInfoP.classList.add('hidden')
    moreInfoP.hidden=true;
    // whne link clicked toggle display of paragraph
    const expandLink = document.getElementById("expand-link")
    expandLink.onclick = expandParagraph;

    // input stuff
    const firstNameText = document.getElementById('txt-first-name')
    firstNameText.addEventListener("keyup", ValidateFirstName);



}