$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.backtotopbutton').fadeIn();
        } else {
            $('.backtotopbutton').fadeOut();
        }
    });
    $('.backtotopbutton').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});
