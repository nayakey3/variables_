$(document).ready(function(){

// this click function increments the current score by 1
  $("#incrementBy1").click(function(){
    var score = $('#current').text();
    score++;
    $("#current").text(score);
  });
// write click function to decrement by 1
$("#decrementBy1").click(function(){
  var score = $('#current').text();
  score--;
  $("#current").text(score);
});

// write click function to increment by 5
$("#incrementBy5").click(function(){
  var score = $('#current').text();
  score = Number(score);
  score = score + 5;
  $("#current").text(score);
});

// write click function to decrement by 5
$("#decrementBy5").click(function(){
  var score = $('#current').text();
  score = Number(score - 5);
  $("#current").text(score);
});


});