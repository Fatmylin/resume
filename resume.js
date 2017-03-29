
$('.second').mouseenter(function(){
 
  $(".face").addClass("animate");
  $(".intro").addClass("animate");
  $(".sintro").addClass("animate2");
});
$(".second").mouseleave(function(){
 
  $(".face").removeClass("animate");
  $(".intro").removeClass("animate");
  $(".sintro").removeClass("animate2");
});

$(".third").mouseenter(function(){
 
  var position = $('.selintro').offset();  
  var x = position.left;  
  var y = position.top; 
  y-=10;
  // alert(y);
  $('.selintro').offset({top:y,left:x});     
  $(".selintro").addClass("animate");
  $(".sintro2").addClass("animate2");
  
});
$(".third").mouseleave(function(){
 
  var position = $('.selintro').offset();  
  var x = position.left;  
  var y = position.top; 
  y+=10;
  $('.selintro').offset({top:y,left:x}); 
  $(".selintro").removeClass("animate");
  $(".sintro2").removeClass("animate2");
  
});

$('.fourth').mouseenter(function(){
 
  $(".film").addClass("animate");
  $(".sintro3").addClass("animate2");
});
$(".fourth").mouseleave(function(){
 
  $(".film").removeClass("animate");
  $(".sintro3").removeClass("animate2");
});