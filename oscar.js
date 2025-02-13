const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')
const musicBtn = document.querySelector('.music-btn')
const audio = document.getElementById('music')

yesBtn.addEventListener('click', () => {
    alert(`Yaaaaaay! Thank You for accepting to be Oscar's Valentine. \n\nVenue: KFC Kimanthi Street. \nTime: 4.45pm. \n\nWear a pretty dress for your valentine! 💖`)
})

musicBtn.addEventListener('click', () => {
    audio.paused ? audio.play() : audio.pause()
})
