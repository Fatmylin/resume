
 $(".index").css("display","none");
 $(window).resize(function(){	 
 
  if ($(window).width() <900)
  {
	  $(".index").css("display","initial");
	  $(".bar").css("display","none");
  }
  else
  {
	  $(".index").css("display","none");
	  $(".bar").css("display","initial");
  }
/*if ($(window).width() >1200)
	 {
		
		 $(".profilepic").removeClass("animate3");
		 $(".experience").removeClass("animate4");
		 $("#banner").css("height","800px");

	 }
	 else if($(window).width() <1200)
     {
		
		 $(".profilepic").addClass("animate3");
		 $(".experience").addClass("animate4");
		 $("#banner").css("height","1000px");
	 }*/
	 });
$(window).scroll(function() {

    if ($(this).scrollTop() > 750) {
        // apply effects and animations
		$(".profilepic").addClass("animate");
		$(".experience").addClass("animate");
		$(".sintro").addClass("animate2");
    }
	
	if ($(this).scrollTop() > 1300){		  
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

$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊 
   
　　if($this_Top < 100){
　　　$('.nav').stop().animate({top:"-65px"});
　　　}
　　　　if($this_Top > 100){
　　　　$('.nav').stop().animate({top:"0px"});
　　　 }
　　}).scroll();
　});
});

$(".index").click(function(){
  $('.navside').stop().animate({right:"0px"});　　　
});
$(".barside").click(function(){
  $('.navside').stop().animate({right:"-200px"});　
});
