$(document).ready(function(){
  h = $(window).height()
  w = $(window).width()
  count = $(".job_content_li").length;
  $(".job_content_li").css("height",h+"px");
  $(".job_content_li").css("width",w+"px");
  for(var i=0;i<count;i++){
    $(".job_content_li").eq(i).css("left",i*w+"px");
  };

  //滚动效果后操作
  function remove_li_show(type){
    $(".li_show").eq(type).removeClass("li_show");
    if(type == 1||type == "1"){
      // 当已是最左端时，隐藏左箭头
      remove_left_arow();
      // 标题步骤导航
      if($(".nav_title_active").prev().length > 0){
        $(".nav_title_active").prev().addClass("nav_title_active");
      };
    }else{
      // 当已是最右端时，隐藏右箭头
      remove_right_arow();
      // 标题步骤导航
      if ($(".nav_title_active").next().length > 0) {
        $(".nav_title_active").next().addClass("nav_title_active");
      };
    };
    $(".nav_title_active").eq(type).removeClass("nav_title_active");
    // 完成滚动效果后，隐藏不应该显示的模块
    act_done_none();
  };



  // 当已是最左端时，隐藏左箭头
  function remove_left_arow(){
    if($(".li_show").prev().length <= 0){
      $(".action_left").css("display","none");
    };
  };

  // 当已是最右端时，隐藏右箭头
  function remove_right_arow(){
    if($(".li_show").next().length <= 0){
      $(".action_right").css("display","none");
    };
  };

  //导航条滚动完成后，事件处理
  function nav_click_fuc(obj){
    $(".job_content_action,.job_content_li").css("display","block");
    $(".nav_title_active").removeClass("nav_title_active");
    obj.addClass("nav_title_active");
    $(".li_show").removeClass("li_show")
  };

  // 右箭头滚动
  function right_arrow_act(){
    $(".action_left,.job_content_li").css("display","block");
    if($(".li_show").next().length > 0){
      $(".li_show").next().addClass("li_show");
        $.when(animate_done(0,"li")).then(function(){remove_li_show(0);});
    };
  };

  // 左箭头滚动
  function left_arrow_act(){
    $(".action_right,.job_content_li").css("display","block");
    if($(".li_show").prev().length > 0){
      $(".li_show").prev().addClass("li_show");
      $.when(animate_done(1,"li")).then(function(){remove_li_show(1);});
    };
  }

  var animate_done = function(num,type) {
    if(type != "nav"){
      if(num == "1"||num==1){
        res = w
      }else{
        res = -w
      };
    }else{
      res = -num
    };
    return $(".job_content_li").animate(
        {
          left: '+='+res
        },1200
      ).promise();
  };

  // 完成滚动效果后，隐藏不应该显示的模块
  function act_done_none(){
    $(".job_content_li").each(function() {
      size = $(this).css("left")
      if ($(this).css("left") != "0px") {
        $(this).css("display","none");
      };
    });
  };

  // 导航条事件响应
  $(".nav_first").click(function(){
    if($(".nav_title_active").prev().length > 0) {
      nav_click_fuc($(this));
    }
    num = $("#job_content_li_img_1").css("left");
    num = num.substring(0,num.length-2);
    $("#job_content_li_img_1").addClass("li_show");
    $.when(animate_done(num,"nav")).then(act_done_none).then(remove_left_arow);
  });
  $(".nav_second").click(function(){
    nav_click_fuc($(this));
    num = $("#job_content_li_img_2").css("left")
    num = num.substring(0,num.length-2);
    $("#job_content_li_img_2").addClass("li_show");
    $.when(animate_done(num,"nav")).then(act_done_none);
  });
  $(".nav_third").click(function(){
    nav_click_fuc($(this));
    num = $("#job_content_li_img_3").css("left")
    num = num.substring(0,num.length-2);
    $("#job_content_li_img_3").addClass("li_show");
     $.when(animate_done(num,"nav")).then(act_done_none);
  });
  $(".nav_fourth").click(function(){
    if($(".li_show").next().length > 0){
      nav_click_fuc($(this));
    };
    num = $("#job_content_li_img_4").css("left");
    num = num.substring(0,num.length-2);
    $("#job_content_li_img_4").addClass("li_show");
    $.when(animate_done(num,"nav")).then(act_done_none).then(remove_right_arow);
  });

  // 左按钮响应事件
  $(".action_left").click(function(){
    left_arrow_act();
  });

  // 右按钮响应事件
  $(".action_right").click(function(){
    right_arrow_act();
  });


});