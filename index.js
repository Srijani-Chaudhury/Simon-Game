var arr=[];
var arr2=[];
const buttonColors = ["red","blue","green","yellow"];
var level=0;
var started=false;
var bti=0;
$(document).keypress(function(){
  if(!started){
    newSequence();
    started=true;
  }
});
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
  arr2.push(userChosenColor);
  play_Sound(userChosenColor);
  animate(userChosenColor);
   console.log(arr2);
  if(arr[arr2.length-1]===arr2[arr2.length-1])
  {
    if(arr.length===arr2.length)
    {
      setTimeout(newSequence,900);
    }
  }
  else{
    started=false;
    level=0;
    arr=[];
    $("#level-title").text("Game is over press any key to restart");
    $("body").addClass("game-over");
    var wer=new Audio("sounds/wrong.mp3");
    wer.play();
    setTimeout(function(){


      $("body").removeClass("game-over");
    },1000);
  }


});
function animate(param){
  $("#"+param).addClass('pressed');
  setTimeout(function(){
            $("#"+param).removeClass('pressed');
    }, 100);
}
function play_Sound(param)
{
  var aud=new Audio("sounds/"+param+".mp3");
  aud.play();
}
function newSequence()
{
  arr2=[];
  $("#level-title").text("Level"+ " " +level);
  level++;
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour=buttonColors[randomNumber];
  $("#"+randomChosenColour).fadeOut("fast");
  $("#"+randomChosenColour).fadeIn("fast");
  play_Sound(randomChosenColour);
  arr.push(randomChosenColour);
  console.log(arr);
}
