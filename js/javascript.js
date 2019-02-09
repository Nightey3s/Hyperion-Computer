  var a = document.getElementById("myTopnav");
  var b = document.getElementById("burger")
  if(b.addEventListener){
    b.addEventListener("click", mobileclick);
  }

  function mobileclick(){
    if (a.className === "topnav") {
      a.className += " responsive";
    } else {
      a.className = "topnav";
    }
  }

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
