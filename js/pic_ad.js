$(document).ready(function(){
	$(".pic_ad_a").mouseover(function(){
		$(this).parent("td").addClass("show_ad");
		$(this).parent("td").siblings("td").removeClass("show_ad");
	});
});