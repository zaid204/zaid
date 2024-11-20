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

// Add an event listener to toggle controls visibility on click or touch
const playerContainer = document.querySelector(".plyr");

if (playerContainer) {
  // Function to toggle visibility
  const toggleControls = () => {
    const controls = playerContainer.querySelector(".plyr__controls");
    if (controls) {
      controls.style.opacity = controls.style.opacity === "0" ? "1" : "0";
    }
  };

  // Add both click and touchstart events for cross-device compatibility
  playerContainer.addEventListener("click", toggleControls);
  playerContainer.addEventListener("touchstart", toggleControls);
}
