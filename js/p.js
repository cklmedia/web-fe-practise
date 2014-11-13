$(document).ready(function(){
	// 初始化隐藏二级菜单
	$(".title").siblings("ul").hide();
	// 一级菜单点击相应方法
	function nav_click_for_second(object){
		object.siblings("ul").slideToggle(300);
	    if($(".left_nav_box").width() == 45){
	    	obj = object.parent("li").siblings("li");
	    	obj.children("a").removeClass("active");
	    	obj.children("a").children("i").text("+");
	    	obj.children("ul").hide();
	    }
	    object.toggleClass("active");
	    var text = object.children("i").text()
	    if( text == "+"){
	    	object.children("i").text("-") ;
	    }else{
	    	object.children("i").text("+");
	    }
	}
	// 缩小以及惨淡响应方法
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
				$(".left_nav_box").css("width","15%");
				$(".mian_content").css("width","85%");
				$(".title_name,.toggle-icon").show();
				$(this).children("ul").removeClass("small_left_nav");
			}
		});
	}
	// 一级菜单响应事件
	$(".title").click(function(){
	    nav_click_for_second($(this));
	});
	// 缩小菜单相遇事件
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

	
});