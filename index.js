var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
 
var dice1="dice"+randomNumber1+".png";
var dicce1="./images/"+dice1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dicce1);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var dice2="./images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Bramara is the Winner";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Hima is the Winner";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}