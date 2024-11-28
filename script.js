function play() {
  const videoUrl = document.getElementById("vid").value;
  if (!videoUrl) {
      alert("Please enter a video URL.");
  } else {
      // Update the video player with the entered URL
      document.getElementById("videoSource").src = videoUrl;
      document.getElementById("player").load(); // Reload the player with the new source
      document.getElementById("player").play(); // Start playing the video
      document.getElementById("player").scrollIntoView({
          behavior: "smooth",
      });
  }
}

// Toggle controls visibility when clicking on the video
function toggleControls() {
  const video = document.getElementById("player");

  // Toggle the controls visibility
  if (video.hasAttribute('controls')) {
      video.removeAttribute('controls');
  } else {
      video.setAttribute('controls', 'controls');
  }
}

