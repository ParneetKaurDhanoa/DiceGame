var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomimage = "dice"+randomNumber1+".png";
var source =randomimage;
var a = document.querySelectorAll("img")[0];
a.setAttribute("src",source); 

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomimage2 = "dice"+randomNumber2+".png";
var source2 =randomimage2;
var a2 = document.querySelectorAll("img")[1];
a2.setAttribute("src",source2); 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  
