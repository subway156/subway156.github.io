'using strict'

function displayFruits() {
    const fruit1 = document.getElementById('fruit1').value
    console.log(`first fruit ${fruit1}`)

    const fruit2 = document.getElementById('fruit2').value
    console.log(`second fruit ${fruit2}`)

    const fruit3 = document.getElementById('fruit3').value
    console.log(`fruit 3 `)

    result.textContent = `You like ${fruit1}, ${fruit2}, and ${fruit3}`
    

}

// display results
const btnResult = document.getElementById("btn-results")
btnResult.onclick = displayFruits

