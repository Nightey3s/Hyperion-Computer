$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.backtotopbutton').fadeIn();
        } else {
            $('.backtotopbutton').fadeOut();
        }
  //         var scrollHeight = $(document).height();
  //       var scrollPosition = $(window).height() + $(window).scrollTop();
  //       if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  //         $(".backtotopbutton").css("z-index", "1000");
  //     // when scroll to bottom of the page
  // }
    });
    $('.backtotopbutton').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});
