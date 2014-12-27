setTimeout(function() {
  $("span.name").css("display", "inline-block");
  showEverything();
}, 15000);



var windowWidth = window.innerWidth;
if (windowWidth > 320 && windowWidth < 480) {
  $(".rockyfa").removeClass("hidden");
} else {
  var rockyAudio = new Audio('/media/audio/roackytheme.mp3')
  rockyAudio.play();
}

$(window).resize(function() {
  $(".birthdayDiv").css({
    "height": window.innerHeight + "px",
    "width": window.innerWidth * .9 + "px"
  })
})


var fireworkAudio = new Audio('/media/audio/firework.mp3');
fireworkAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

rockyAudio.ontimeupdate = function() {
  var intTime = Math.floor(this.currentTime);
  if (intTime >= 30) {
    this.pause();
    showFireworks();
    // showEverything();
    $(".rockyfa").addClass("hidden");
    $(".rockyfapause").addClass("hidden");
  }
}

function playRocky() {
  rockyAudio.play();
  $(".rockyfa").addClass("hidden");
  $(".rockyfapause").removeClass("hidden");
}

function pauseRocky() {
  rockyAudio.pause();
  $("rockyfa").removeClass("hidden");
  $("rockyfapause").addClass("hidden");
}

function showFireworks() {
  startFireworks();
  setTimeout(function() {
    $(".birthdayDiv").css({
      "height": window.innerHeight + "px",
      "width": window.innerWidth * .9 + "px"
    })
  }, 2000)
  setTimeout(fireworkAudio.play(), 1000);
}


function showEverything() {
  display("greetChoice");
  display("choices");
  display("pauseFireworks");
}

// showEverything();

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


function slide(elem) {
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
};

function randomtry() {
  console.log("inside randomtry");
  //TODO: backend call to get random funny video/audio/image/link
}

function quotetry() {
  console.log("inside quotetry");
  //TODO: backend call to get specific inspirtational quotes
}