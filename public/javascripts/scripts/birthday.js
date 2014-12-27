var rockyAudio = new Audio('/media/audio/roackytheme.mp3')
  // rockyAudio.play();

var fireworkAudio = new Audio('/media/audio/firework.mp3');
fireworkAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

rockyAudio.ontimeupdate = function() {
  var intTime = Math.floor(this.currentTime);
  if (intTime >= 30) {
    console.log("time to pause");
    this.pause();
    showEverything();
  }
}


function showEverything() {
  display("greetChoice");
  display("choices");
  display("pauseFireworks")
  startFireworks();
  setTimeout(fireworkAudio.play(), 2000);
}

showEverything();

function display(className) {
  $("." + className).css("display", "block");
}

function fireworksPause() {
  console.log("inside fireworksPause");
  $(".fa-pause").addClass("hidden");
  $(".fa-play").removeClass("hidden");
  fireworkAudio.pause();
}

function fireworksPlay() {
  $(".fa-play").addClass("hidden");
  $(".fa-pause").removeClass("hidden");
  fireworkAudio.play();
}

var slides = slidr.create('birthday-slidr', {
  controls: 'none'
}).start();

// slidr.create('slidr-ul').start();

function slide(elem) {
  console.log("slide is getting fired with elem", elem);
  switch (elem) {
    case "personal":
      slides.slide('two');
      break
    case "quote":
      slides.slide('three');
      break;
    case "random":
      slides.slide('four');
      break
    case "birthday":
      slides.slide("one");
      break;
    default:
      slides.slide('right');
      break
  }
}