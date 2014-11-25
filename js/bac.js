$(document).ready(function(){
	// 设置每个模块的高度自适应浏览器高度
	h = $(window).height();
	$(".bac_box").css("height",h+"px");
	// 获取页面一共有多少个模块
	bac_box_num = $(".bac_box").size();
	// 对滚动条监听
	$(window).scroll(function(){
	  w_top = $(window).scrollTop()
	  // 循环设置模块的背景图片性质
      for (var i = 0; i < bac_box_num-1; i++) {
      	if( i*h <=w_top && w_top < (i+1)*h){	
      	  $(".bac_box").eq(i).css("background-attachment","fixed");
      	  $(".bac_box").eq(i+1).css("background-attachment","scroll");
        };
      };
    });
});