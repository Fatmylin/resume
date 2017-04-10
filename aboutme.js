/*
$("#intro").mouseenter(function(){
 
  $(".profilepic").addClass("animate");
  $(".experience").addClass("animate");
  $(".sintro").addClass("animate2");
});
$("#intro").mouseleave(function(){
 
  $(".profilepic").removeClass("animate");
  $(".experience").removeClass("animate");
  $(".sintro").removeClass("animate2");
});

$("#skill").mouseenter(function(){
 
  var position = $(".skill").offset();  
  var x = position.left;  
  var y = position.top; 
  y-=10;
  // alert(y);
  $(".skill").offset({top:y,left:x});     
  $(".skill").addClass("animate");
  $(".b").addClass("animate");
  $(".sintro2").addClass("animate2");
  
});
$("#skill").mouseleave(function(){
 
  var position = $(".skill").offset();  
  var x = position.left;  
  var y = position.top; 
  y+=10;
  $(".skill").offset({top:y,left:x}); 
  $(".skill").removeClass("animate");
  $(".b").removeClass("animate");
  $(".sintro2").removeClass("animate2");
  
});

$("#works").mouseenter(function(){
 
  $(".b2").addClass("animate");
  $(".films").addClass("animate");
  $(".sintro3").addClass("animate2");
});
$("#works").mouseleave(function(){
 
  $(".b2").removeClass("animate");
  $(".films").removeClass("animate");
  $(".sintro3").removeClass("animate2");
});*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
        // apply effects and animations
		$(".profilepic").addClass("animate");
		$(".experience").addClass("animate");
		$(".sintro").addClass("animate2");
    }
	
	if ($(this).scrollTop() > 1200){		  
		  $(".skill").addClass("animate");
		  $(".b").addClass("animate");
		  $(".sintro2").addClass("animate2");
	}
	
	if ($(this).scrollTop() > 2000){		  
		   $(".b2").addClass("animate");
		   $(".films").addClass("animate");
		   $(".sintro3").addClass("animate2");
	}
});
$(document).ready(function() {
$(".various").fancybox({
    maxWidth    : 800,
    maxHeight   : 600,
    fitToView   : false,
    width       : '70%',
    height      : '70%',
    autoSize    : false,
    closeClick  : false,
    openEffect  : 'elastic',
    closeEffect : 'none'
});
});