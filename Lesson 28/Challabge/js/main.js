var butoni1 = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var butoni3 = document.getElementById('btn3')

butoni1.onclick=function(){
    butoni1.setAttribute('class',"circle")
}

butoni2.onclick=function(){
    butoni2.setAttribute('class',"shape_rect")
}

butoni3.onclick=function(){
    butoni3.setAttribute('class',"shape_triangle")
}

