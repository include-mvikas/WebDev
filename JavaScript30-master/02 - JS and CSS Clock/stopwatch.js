var sec=0;
var min=0;
var hour=0;
var mili=0;
var timer;
var miliTimer;

var secTag=document.querySelector(".sec");
var minTag=document.querySelector(".min");
var hourTag=document.querySelector(".hour");
var miliTag=document.querySelector(".mili");
function showTime(){
    secTag.innerHTML=sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    minTag.innerHTML=min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    hourTag.innerHTML=hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    miliTag.innerHTML=mili.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}
function addmili(){
    mili++;
    showTime();
}
function addSec(){
    if(sec>=60) {
        addMin();
        sec=0;
    }
    mili=0;
    sec++;
    showTime();

}
function addMin(){
    if(min>=60){
        addHour();
        min=0;
    }
    min++;
}

function addHour(){
    hour++;
}

function startTimer(){
        miliTimer=setInterval(addmili,15);
        timer=setInterval(addSec,1000);
       
}

function stopTimer(){
    clearInterval(timer);
    clearInterval(miliTimer);
    mili=0;
}

function resetTimer(){
    clearInterval(timer);
    clearInterval(miliTimer);
    sec=0,min=0,hour=0,mili=0;
    btn1.classList.remove("btn-dark");
    btn1.classList.add("btn-light");
    btn1.innerHTML="<i class=\"fas fa-play-circle\" aria-hidden=\"true\"></i>  Start";
    stopTimer();
    showTime();
}

var isStart=false;
var btn1=document.querySelector('#btn_1');
var btn2=document.querySelector('#btn_2');

btn1.onclick=function(){
    isStart=!isStart;
    if(isStart==false){
        btn1.classList.remove("btn-dark");
        btn1.classList.add("btn-light");
        btn1.innerHTML="<i class=\"fas fa-play-circle\" aria-hidden=\"true\"></i>  Start";
        stopTimer();
    }
    else{
        btn1.classList.add("btn-dark");
        btn1.classList.remove("btn-light");
        btn1.innerHTML="<i class=\"fas fa-stop-circle\" aria-hidden=\"true\"></i>  Stop";
        startTimer();
    }
}

btn2.onclick=function(){
    resetTimer();

}
