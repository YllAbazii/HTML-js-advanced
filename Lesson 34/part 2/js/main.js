var circle = document.getElementById("circle");
var showtime = document.getElementById("time");
var timestart = new Date().getTime();


function showCircle(){
   circle.style.display='block';
    circle.style.top=Math.random()*500+"px"
    circle.style.left=Math.random()*500+"px"
    timestart= new Date().getTime();
}

showCircle()

circle.onclick = function(){
    circle.style.display ='none';
    setInterval(showCircle,1000)

    var timeend = new Date().getTime();
    var time =(timeend-timestart)/1000
    showTime.innerHTML = time+"s";

}

var colors = ['red','blue' ,'purple','green','pink']

function changeCircleColor(){
            circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
var colorInterval = setInterval(changeCircleColor, 1000);

