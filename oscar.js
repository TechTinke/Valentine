const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const musicBtn = document.querySelector('.music-btn');
const audio = document.getElementById('music');
const confettiDiv = document.querySelector('.confetti');
let musicPlaying = false;

// Enhanced Yes button functionality with confetti
yesBtn.addEventListener('click', () => {
    alert(`
        ⭐️ Yaaaaaay! 🌟 Thank You for accepting to be Oscar's Valentine! 💖
        \n\nVenue: KFC Kimanthi Street.
        \nTime: 4:45 PM.
        \n\nWear a dazzling dress for your valentine! You'll be the prettiest 🌟
        
    `);
    confettiDiv.classList.add('on');
    
    // Confetti resets after animation
    setTimeout(() => {
        confettiDiv.classList.remove('on');
    }, 6000);
});

// Play/Pause music button
musicBtn.addEventListener('click', () => {
    if (!musicPlaying) {
        audio.play();
        musicBtn.textContent = 'Pause Music';
        musicPlaying = true;
    } else {
        audio.pause();
        musicBtn.textContent = 'Play Music';
        musicPlaying = false;
    }
});

// Add surprise message when hovering over No button
noBtn.addEventListener('mouseover', () => {
    alert('Oh no! 😔 How come?\nMaybe a sweet reason will change your mind...');
});
