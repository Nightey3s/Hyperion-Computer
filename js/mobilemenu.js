  var x = document.getElementById("myTopnav");
  var y = document.getElementById("burger")
  if(y.addEventListener){
    y.addEventListener("click", mobileclick);
  }
  // $("#myTopnav").focusout(function(){
  //   x.className = "topnav";
  // });

  function mobileclick(){
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
