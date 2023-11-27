//Handle with opening music
const music = document.getElementById('music');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Check music state
if (!music.paused) {
  playIcon.style.display = 'inline';
  pauseIcon.style.display = 'none';
} else {
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'inline';
}

// Event listener
document.querySelector('.icMusic').addEventListener('click', () => {
  if (music.paused) {
    //Start the music
    music.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    //Stop the music
    music.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }
});

//Handle with video
const myVideo = document.getElementById('myVideo');

myVideo.addEventListener('mouseover', () => {
  myVideo.style.opacity = 1;
});

myVideo.addEventListener('mouseout', () => {
  myVideo.style.opacity = 0.5;
});
