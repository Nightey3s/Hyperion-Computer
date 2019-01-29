var x = document.getElementById("Products");
var content = document.getElementById("dropdownmenucontents");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
  x.addEventListener("mouseover", switchDisplay);
  x.addEventListener("mouseout", restoreDisplay);
}
if(content.addEventListener){
  content.addEventListener("mouseover", switchDisplay);
  content.addEventListener("mouseout", restoreDisplay);
}

function switchDisplay(){
  var H = document.getElementById("Home");
  var C = document.getElementById("CusQ");
  var A = document.getElementById("AbtUs");
  var F = document.getElementById("FAQ");
  var CA = document.getElementById("Cart");
  H.style.opacity = "0";
  C.style.opacity = "0";
  A.style.opacity = "0";
  F.style.opacity = "0";
  CA.style.opacity = "0";
}

function restoreDisplay(){
  var H = document.getElementById("Home");
  var C = document.getElementById("CusQ");
  var A = document.getElementById("AbtUs");
  var F = document.getElementById("FAQ");
  var CA = document.getElementById("Cart");
  H.style.opacity = "1";
  C.style.opacity = "1";
  A.style.opacity = "1";
  F.style.opacity = "1";
  CA.style.opacity = "1";
}
