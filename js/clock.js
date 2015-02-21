tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();

document.getElementById('day').innerHTML=""+tday[nday]+"";
}

document.getElementById('date').innerHTML=""+tmonth[nmonth]+" "+ndate+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
