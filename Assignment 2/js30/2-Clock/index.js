var secDegree = 0;
var minDegree = 0;
var hourDegree = 0;

function time(){
   
 var date = new Date();
 var sec = date.getSeconds();
 var hour = date.getHours();
 var min = date.getMinutes();

secDegree = 6*sec +270;
minDegree = 6*min + 270;
hourDegree = hour*30 + 0.5*min + 270;

//  console.log("Time is "+ hour + " : " + min + " : " + sec );

document.querySelector(".sec").style.transform = "rotate(" + secDegree +"deg)";
document.querySelector(".min").style.transform = "rotate(" + minDegree +"deg)";
document.querySelector(".hour").style.transform = "rotate(" + hourDegree +"deg)";


}
setInterval(time , 1000);