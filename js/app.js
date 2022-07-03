// UI
const display = document.querySelector('.display');
const startbtn = document.querySelector('.start');
const pausebtn = document.querySelector('.pause');
const restartbtn = document.querySelector('.restart');

let [milliseconds,seconds,minutes,hours]=[0,0,0,0];
// console.log(milliseconds);

let time;

startbtn.addEventListener('click', function(){
    // console.log('Start Timer');

    time=setInterval(displaytimer,1000);
});

pausebtn.addEventListener('click', function(){
    // console.log('Stop Timer');
    clearInterval(time);
});

restartbtn.addEventListener('click', function(){
    // console.log('Restart Timer');
    clearInterval(time);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.textContent = "00 : 00 : 00 : 000";
});

function displaytimer(){
    milliseconds +=10;
    // console.log(milliseconds);
    if(milliseconds === 100){
        milliseconds=0;
        seconds +=1;
    }

    if(seconds === 60){
        seconds=0;
       minutes +=1;
    }

    if(minutes === 60){
        minutes=0;
        hours +=1;
    }
    // console.log(`${hours} : ${minutes} : ${seconds}`);
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
    // console.log(h,m,s,ms);
    display.innerHTML= h + " : " + m + " : " + s + " : " + ms;

}
