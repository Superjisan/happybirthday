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

var randomstuffs = [{
  type: "video",
  url: "",
  snippet: ""
}]


function randomtry() {
  console.log("inside randomtry");
  //TODO: backend call to get random funny video/audio/image/link
}

var quotes = [{
  quote: "Rule #1 : It's going to be alright. There are really no other options.",
  author: "Anonymous"
}, {
  quote: "Violence is the last refuge of incompetence",
  author: "Isaac Asimov"
}, {
  quote: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  author: "Margaret Meade"
}, {
  quote: " Don’t wait for something to be fully formed in your head to start on it. Just start, and then work it out as you go.",
  author: "Brendon Stanton"
}, {
  quote: "Your work doesn't stress over you. Therefore, there's no point in stressing over it. It just needs you to do it",
  author: "Anonymous"
}];

function quotetry() {
  var quoteArray = _.pluck(quotes, "quote");
  var parElem = $("blockquote p");
  var currentQuote = parElem.text();
  var currentQuoteIndex = quoteArray.indexOf(currentQuote);
  if (currentQuoteIndex !== quotes.length - 1) {
    var quoteToReplace = quotes[currentQuoteIndex + 1].quote;
    var authorToReplace = quotes[currentQuoteIndex + 1].author;
  } else {
    var quoteToReplace = quotes[0].quote;
    var authorToReplace = quotes[0].author;
  }
  var footerElem = $("blockquote footer")
  parElem.fadeTo("slow", 0);
  footerElem.fadeTo("slow", 0);
  setTimeout(function() {
    parElem.text(quoteToReplace);
    parElem.fadeTo("slow", 1);
    footerElem.text(authorToReplace);
    footerElem.fadeTo("slow", 1);
  }, 1000);

}