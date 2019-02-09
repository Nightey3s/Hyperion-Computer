  var x = document.getElementById("myTopnav");
  var y = document.getElementById("burger")
  if(y.addEventListener){
    y.addEventListener("click", mobileclick);
  }

  function mobileclick(){
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
