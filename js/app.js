const display=document.querySelector('.display');
// console.log(display);


function setTimer(){
    const date=new Date();
    const hours=date.getHours() < 12 ? date.getHours()  : date.getHours() - 12 ;
    const minutes=date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() ;
    const seconds=date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() ;
    const ampm=hours < 12 ? "pm" : "am";
    // console.log(ampm);
    display.innerHTML= hours + " : " + minutes + " : " +seconds +  "    "  + ampm;
}
setInterval(setTimer,1000);
