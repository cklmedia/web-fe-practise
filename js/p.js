$(document).ready(function(){
	$(".title").siblings("ul").hide();
	
	$(".title").click(function(){
	    $(this).siblings("ul").slideToggle(300);
	    if($(".left_nav_box").width() == 45){
	    	obj = $(this).parent("li").siblings("li");
	    	obj.children("a").removeClass("active");
	    	obj.children("a").children("i").text("+");
	    	obj.children("ul").hide();
	    }
	    $(this).toggleClass("active");
	    var text = $(this).children("i").text()
	    if( text == "+"){
	    	$(this).children("i").text("-") ;
	    }else{
	    	$(this).children("i").text("+");
	    }
	});

	$(".left_nav_change_width i").click(function(){
		if($(".left_nav_box").width() > 45){
			$(this).removeClass("glyphicon-chevron-left");
			$(this).addClass("glyphicon-chevron-right");
			change_second_nav_style("small");
		}else{
			$(this).removeClass("glyphicon-chevron-right");
			$(this).addClass("glyphicon-chevron-left");
			change_second_nav_style("big");
		}
	});

	function change_second_nav_style(tyle){
		$(".left_nav_first_li").each(function(){
			li_top = $(this).offset().top;
			if(tyle == "small"){
				$(".title").removeClass("active");
				$(".title").siblings("ul").hide();
				$(".title").children("i").text("+");
				$(".title_name,.toggle-icon").hide();
				$(".left_nav_box").css("width","45px");
				$(".mian_content").css("width",$(window).width()-45+"px");
				$(this).children("ul").addClass("small_left_nav");
				$(this).children("ul").css("top",li_top+"px");
			}else{
				$(".left_nav_box").css("width","20%");
				$(".mian_content").css("width","80%");
				$(".title_name,.toggle-icon").show();
				$(this).children("ul").removeClass("small_left_nav");
			}
		});
	}
});