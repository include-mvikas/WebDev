var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var path1="images/"+"dice"+randomNumber1+".png";
var path2="images/"+"dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute('src',path1);
document.querySelector(".img2").setAttribute('src',path2);

if(randomNumber2> randomNumber1){
    //Player 2 wins
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}else if(randomNumber1>randomNumber2){
    //player 1 wins
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
    }
    else{
    //draw
    document.querySelector("h1").innerHTML="Draws!";
    }

console.log("dice 1: "+randomNumber1);
console.log("dice 2: "+randomNumber2);