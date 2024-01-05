var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var text = document.getElementById("text");
var body = document.getElementById("body");

function gradient(){
    var colors = body.style.background = "linear-gradient(to right, " + color1.value +", "+ color2.value +")";
    text.textContent = colors;
    body.style.background = colors;
}

color1.addEventListener("input",gradient);

color2.addEventListener("input",gradient);