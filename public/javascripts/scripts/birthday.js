var rockyAudio = new Audio('/media/audio/roackytheme.mp3')
rockyAudio.play();

rockyAudio.ontimeupdate = function() {
  var intTime = Math.floor(this.currentTime);
  if (intTime >= 30) {
    console.log("time to pause");
    this.pause();
    startFireworks();
  }
}