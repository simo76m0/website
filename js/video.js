window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const stopBtn = document.querySelector("#stop");
  const slowBtn = document.querySelector("#slowdown");
  const speedBtn = document.querySelector("#speedup");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  slowBtn.addEventListener("click", speedUpVideo);
  speedBtn.addEventListener("click", slowDownVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(img/pause.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(img/play.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtn.style.backgroundImage = "url(img/play.svg)";
  }

  function slowDownVideo() {
      if (video.playbackRate >= 0.25) {
        video.playbackRate -= 0.25;
        playBckRate.textContent = video.playbackRate;
      }
    }
    function speedUpVideo() {
      video.playbackRate += 0.25;
      playBckRate.textContent = video.playbackRate;
    }
}
