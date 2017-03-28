
$('.second').mouseenter(function(){
 
  $(".face").addClass("animate");
  $(".intro").addClass("animate");
});
$(".second").mouseleave(function(){
 
  $(".face").removeClass("animate");
  $(".intro").removeClass("animate");
});

$(".third").mouseenter(function(){
 
  var position = $('.selintro').offset();  
  var x = position.left;  
  var y = position.top; 
  y-=10;
  // alert(y);
  $('.selintro').offset({top:y,left:x});     $(".selintro").addClass("animate");
  
});
$(".third").mouseleave(function(){
 
  var position = $('.selintro').offset();  
  var x = position.left;  
  var y = position.top; 
  y+=10;
  $('.selintro').offset({top:y,left:x}); 
  $(".selintro").removeClass("animate");
  
});