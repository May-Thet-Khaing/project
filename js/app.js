const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const milliseconds=document.getElementById('milliseconds');


// console.log(newyeardate);

function updatetime(){
    const date=new Date();
    const currentyear=new Date().getFullYear();
    const newyeardate=new Date(`January 01 ${currentyear +1} 00:00:00`);

    const diff=newyeardate-date;
    // console.log(diff);

    const day=Math.floor(diff/1000/60/60/24);
    // console.log(day);

    const hour=Math.floor(diff/1000/60/60)  % 24;
    // console.log(hour);
    
    const minute=Math.floor(diff/1000/60) % 60;
    // console.log(minute);

    const second=Math.floor(diff/1000) % 60;
    // console.log(second);

    const millisecond=Math.floor(diff) % 100;
    // console.log(millisecond);

    days.innerText=day;
    hours.innerText=hour > 10 ? hour : "0" + hour;
    minutes.innerText=minute >10 ? minute : "0" + minute;
    seconds.innerText=second >10 ? second : "0" + second; 


}
setInterval(updatetime,1000);


