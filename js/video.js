window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const stopBtn = document.querySelector("#stop");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(img/pause_black.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(img/play_black.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtn.style.backgroundImage = "url(img/play_black.svg)";
  }
}
