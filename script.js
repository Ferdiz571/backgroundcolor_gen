var css = document.querySelector("h3");
var color1 =  document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =document.getElementById("gradient");
var button = document.createElement("button");


defaultColor();
ranBtn();

function defaultColor(){
  color1.value = "#FF0000";
  color2.value = "#FFFF00";
  body.style.background = "linear-gradient(to right, "
  + color1.value
  +", "
  + color2.value
  + ")";

  css.innerHTML = body.style.background +";";
}

function ranBtn(){
  var createText = document.createTextNode("Generate Background");
  button.appendChild(createText);
  body.appendChild(button);
}

function randomSelect(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = Math.floor(Math.random()*16777216).toString(16);
  color1.value = "#"+ randomColor;
  color2.value = "#" + randomColor2;

  body.style.background = "linear-gradient(to right, "
  + color1.value
  +", "
  + color2.value
  + ")";

  css.innerHTML = body.style.background +";";
}


function pickColors(){
  body.style.background = "linear-gradient(to right, "
  + color1.value
  +", "
  + color2.value
  + ")";

  css.innerHTML = body.style.background +";";
}



button.addEventListener("click", randomSelect);

color1.addEventListener("input", pickColors);

color2.addEventListener("input", pickColors);
