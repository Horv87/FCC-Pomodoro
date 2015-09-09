var long = 25*1000*60;
var mid = 10*1000*60;
var short = 5*1000*60;

var time = long;
var d;
var dateString;
var interval;
var breakTime = 5*1000*60;



function start(timer) {
interval = setInterval(function () {updTime()},1000);
time = timer;
function updTime () {
   time = time -1000;

 d = new Date(time);


 dateString = d.getMinutes() +' : ' + d.getSeconds();
      document.getElementById("demo").innerHTML = dateString;



}
}

function stop(){
  window.clearInterval(interval);
}

function reset() {

}
