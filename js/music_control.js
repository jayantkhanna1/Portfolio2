function pauseMusic() {
    // music is playing pause it
    document.getElementById('music').pause();

    // stop the animation on music icon
    document.getElementById('inner_music_control').style.display = 'none';
    document.getElementById('music_play_controls').style.display = 'flex';
}
function playMusic() {
    // Playing music
    document.getElementById('music').play();
    
    // Starting animation
    document.getElementById('inner_music_control').style.display = 'flex';
    document.getElementById('music_play_controls').style.display = 'none';
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      // The page is hidden (user switched to another tab)
      pauseMusic();
    } else if (document.visibilityState === "visible") {
        playMusic();
    }
  });
