const line_ = document.getElementsByClassName("line");

for(var i = 0; i<line_.length; i++){
    line_[i].addEventListener("mouseover", fun);
}

function fun(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var a = Math.random();
    this.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
}