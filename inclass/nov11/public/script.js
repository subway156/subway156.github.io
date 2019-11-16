async function showSongs(){
    let songsJson = await fetch('/api/songs')
    let songs = await songsJson.json()
    let songsDiv = document.getElementById('songs')
    console.log(songs)

    for(i in songs){
        songsDiv.append(getSongElem(songs[i]))
    }


}

async function showSong(){
    let id = document.getElementById("txt-song-id").value
    let response = await fetch(`api/songs/${id}`)
    let song = await response.json()

    let songDiv = document.getElementById(`song`)
    songDiv.append(getSongElem(song))
    console.log(song)
}

async function addSong(){
    // get the song information
    const songName = document.getElementById('txt-new-song-name').value
    const songSinger = document.getElementById('txt-new-song-singer').value
    const songGenre = document.getElementById('txt-new-song-genre').value

    console.log(`you are adding ${songName}, ${songSinger}, ${songGenre}`)

    let song = {'name': songName, 'singer': songSinger, 'genre': songGenre}
        
    let response = await fetch('/api/songs', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset-utf-8'
        },
        body: JSON.stringify(song)
    })

    let result = await response.json()
    console.log(result)

}

function getSongElem(song){
    let songDiv = document.createElement("div")
    songDiv.classList.add('song')
    let songTitle = document.createElement('h3')
    songTitle.innerHTML = song.name

    let songP = document.createElement('p')
    songP.innerHTML = `by ${song.singer}, genre ${song.genre}`
    songDiv.append(songTitle)
    songDiv.append(songP)
    

    return songDiv
}


window.onload = function(){
    this.showSongs();
    let showSongButton = document.getElementById("show-song")
    showSongButton.onclick = showSong()

    let addSongButton = this.document.getElementById('btn-add-song')
    addSongButton.onclick = addSong
}
