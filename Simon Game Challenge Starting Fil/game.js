//alert("wokrking");

let buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = []; // this is saving color which has been random generated
let userClicked = [];
var level = 0;


$(document).keypress(function() {
 if (level==0){
  nextSequence();}
});


$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClicked.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClicked.length-1);
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClicked[currentLevel]){
    console.log("passed");
    if(gamePattern.length===userClicked.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else {
    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
};

function nextSequence() {
  userClicked = []; // note iss ko andar bhi lene se sari value compare horahi hai kese??

  var randomChosenColour = buttonColor[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(500).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  level++;
  $("#level-title").text("LEVEL-" + level);
};


function playSound(name) {
  var audio1 = new Audio("sounds/" + name + ".mp3");
  audio1.play();
};

function animatePress(clickedColor) {
  $("#" + clickedColor).addClass("pressed");
  setTimeout(function() {
    $("#" + clickedColor).removeClass("pressed");
  }, 100);
};

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;

}
