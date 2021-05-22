function playSound(val){
    switch (val) {
        case "w":
             var tom1= new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;
            
        case "a":
             var tom2= new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;

        case "s":
             var tom3= new Audio("sounds/tom-3.mp3");
             tom3.play();
            break;
            
        case "d":
             var tom4= new Audio("sounds/tom-4.mp3");
             tom4.play();
            break;

        case "j":
             var snare= new Audio("sounds/snare.mp3");
             snare.play();
            break;

        case "k":
             var kick= new Audio("sounds/kick-bass.mp3");
             kick.play();
            break;
            
        case "l":
             var crash= new Audio("sounds/crash.mp3");
             crash.play();
            break;
    
        default:
            break;
    }
}

function applyPressed(key){
    var clickedBtn=document.querySelector("."+key);
    clickedBtn.classList.add("pressed");
    setTimeout(function(){
        clickedBtn.classList.remove("pressed");
    },100);
}

var arr= document.querySelectorAll(".drum");
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
    playSound(this.innerHTML);
    applyPressed(this.innerHTML);
      
    });
}

document.addEventListener("keydown",function(event){
    playSound(event.key);
    applyPressed(event.key);
});