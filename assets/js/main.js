const btn = document.getElementById("switch-theme")
const btnMusicToggle = document.getElementById("music-toggle")
const music = document.getElementById("music")

function playMusic() {
    if (document.body.classList[0] == "light-theme")
    {
        music.src = "assets/musics/normal-world.mpeg"
    }
    else {
        music.src = "assets/musics/inverted-world.mpeg"
    }
    if (btnMusicToggle.innerHTML == "music_note"){
        music.play()
        music.volume = 0.2
        btnMusicToggle.innerHTML = "music_off"
    }
    else {
        music.pause()
        btnMusicToggle.innerHTML = "music_note"
    }
}

btnMusicToggle.addEventListener("click", () => {
    playMusic()
})

btn.addEventListener("click", () => {
    const body = document.getElementById("body")
    body.classList.toggle("dark-theme")
    body.classList.toggle("light-theme")
    playMusic()
    playMusic()
})
