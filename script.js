const player = new Plyr("#player", {
  controls: [
    "play-large",
    "rewind",
    "play",
    "fast-forward",
    "progress",
    "current-time",
    "mute",
    "volume",
    "captions",
    "settings",
    "pip",
    "fullscreen",
  ],
});

function play() {
  const videoUrl = document.getElementById("vid").value;
  if (!videoUrl) {
    alert("Please enter a video URL.");
  } else {
    document.getElementById("player").src = videoUrl;
    document.getElementById("player").scrollIntoView({
      behavior: "smooth",
    });
  }
}

// Add an event listener to hide the pause icon
const playerContainer = document.querySelector(".plyr"); // The main player container
if (playerContainer) {
  playerContainer.addEventListener("click", () => {
    const controls = playerContainer.querySelector(".plyr__controls");
    if (controls) {
      controls.classList.toggle("hidden"); // Add/remove the hidden class to toggle visibility
    }
  });
}
