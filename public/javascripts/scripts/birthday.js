setTimeout(function() {
  $("span.name").css("display", "inline-block");
  showEverything();
}, 15000);



var rockyAudio = new Audio('/media/audio/roackytheme.mp3');
var windowWidth = $(window).width();
if (windowWidth > 320 && windowWidth < 480) {
  $(".rockyfa").removeClass("hidden");
} else {
  playRocky();
  setTimeout(function() {
    console.log("rockyAudio currentTime", rockyAudio.currentTime);
    if (rockyAudio.currentTime === 0) {
      pauseRocky();
    }
  }, 2000);
}

$(window).resize(function() {
  // $(".birthdayDiv").css({
  //   "height": $(window).height() + "px",
  //   "width": $(window).width() + "px"
  // });

  // $(".container-fluid").css({
  //   "height": $(window).height() + "px",
  //   "width": $(window).width() + "px"
  // })
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
  $(".rockyfa").removeClass("hidden");
  $(".rockyfapause").addClass("hidden");
}

function showFireworks() {
  startFireworks();
  setTimeout(function() {
    // $(".birthdayDiv").css({
    //   "height": $(window).height() + "px",
    //   "width": $(window).width() + "px"
    // });

    // $(".container-fluid").css({
    //   "height": $(window).height() + "px",
    //   "width": $(window).width() + "px"
    // })
  }, 2000)
  setTimeout(function() {
    fireworkAudio.play();
    display("pauseFireworks");
  }, 1000);
}


function showEverything() {
  display("greetChoice");
  display("choices");
}

// showEverything();

function display(className) {
  $("." + className).css("display", "block");
}

function fireworksPause() {
  console.log("inside fireworksPause");
  $(".pauseFireworks .fa-pause").addClass("hidden");
  $(".pauseFireworks .fa-play").removeClass("hidden");
  fireworkAudio.pause();
}

function fireworksPlay() {
  $(".pauseFireworks .fa-play").addClass("hidden");
  $(".pauseFireworks .fa-pause").removeClass("hidden");
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
  $(window).scrollTop();
};

function randomtry() {
  console.log("inside randomtry");
  //TODO: backend call to get random funny video/audio/image/link
}

function quotetry() {
  console.log("inside quotetry");
  //TODO: backend call to get specific inspirtational quotes
}