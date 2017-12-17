$(document).ready(
  // $('.deScroll').css('overflow', 'hidden'),
  $(".pageDown").click(function () {
    // $('.deScroll').css('overflow', 'auto')
  }),
  $(window).scroll(function () {
    var winHeight = $(this).height();
    var winWidth = $(this).width();
    var hrLine = $("#advantages hr");
    var sTop = $(this).scrollTop();
    var hrLineTop = $(hrLine).offset().top;
    if ((sTop + winHeight) > (hrLineTop + 200)) {
      $("#advantages hr").addClass("hrAnimate")
    }

    if ($(window).scrollTop() > 0) {
      $("nav").css("background", "#fff");
      $("nav .navRightItems li a").css("color", "#000");
      $("nav .navRightItems ").addClass("moreThan").removeClass("equalThan");
    } else {
      $("nav").css("background", "transparent");
      $("nav .navRightItems li a").css("color", "#fff");
      $("nav .navRightItems ").addClass("equalThan").removeClass("moreThan");
      // $('.deScroll').css('overflow', 'hidden')
    }
  }),

  $("#downloads  .dlist").on("click", "li", function () {
    // 设index为当前点击
    var index = $(this).index();
    // 点击添加样式利用siblings清除其他兄弟节点样式
    $(this).addClass("active").siblings().removeClass("active");
    // 同理显示与隐藏
    $(this).parents(".downloadsContainerLeft").find(".dlsit-list li").eq(index).show().siblings().hide();
  })
);