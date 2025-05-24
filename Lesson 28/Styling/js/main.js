var butoni1 = document.getElementById('btn1')
var butoni2= document.getElementById('btn2')
var text = document.getElementById('text')

butoni1.onclick = function(){
    text.style.color="red";
    text.style.backgroubdColor="lightgrey";
    text.style.Aligntext="center";
    text.style.fontsize="100px";
    text.style.padding="200px";
}

butoni2.onclick = function(){
    text.style.color="";
    text.style.backgroubdColor="";
    text.style.Aligntext="";
    text.style.fontsize="";
    text.style.paddibg="";
}

text.onmousemove=function(){
    text.style.cssText="color:red;background-color: lightblue;text-aligb:center;font-size=100px"

}

butoni1.onclick=function(){
    text.Attribute('class',"test")
}
