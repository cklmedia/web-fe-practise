$(document).ready(function(){
  h = $(window).height()
  $(".job_content_li").css("height",h-76+"px");
  $(".action_left").click(function(){
    $(".action_right").css("display","block");
  	if($(".li_show").prev().length > 0){
      $(".li_show").prev().slideDown(500).addClass("li_show");
      $(".li_show").eq(1).slideUp(500).removeClass("li_show");
    };
    if($(".li_show").prev().length <= 0){
      $(".action_left").css("display","none");
    };
    if($(".nav_title_active").prev().length > 0){
      $(".nav_title_active").prev().addClass("nav_title_active");
      $(".nav_title_active").eq(1).removeClass("nav_title_active");
    };
  });
  $(".action_right").click(function(){
    $(".action_left").css("display","block");
  	if($(".li_show").next().length > 0){
  	  $(".li_show").next().slideDown(500).addClass("li_show");
      $(".li_show").eq(0).slideUp(500).removeClass("li_show");
  	};
  	if($(".li_show").next().length <= 0){
      $(".action_right").css("display","none");
  	};
  	if ($(".nav_title_active").next().length > 0) {
  	  $(".nav_title_active").next().addClass("nav_title_active");
  	  $(".nav_title_active").eq(0).removeClass("nav_title_active");
  	};
  });
});