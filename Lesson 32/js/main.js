var input=document.getElementById("input_id")
var button=document.getElementById("btn_id")
var text=document.getElementById("teksti_id")

button.onclick= function(){
    text.innerHTML = input.value
}

var text="The best school in the world is Digital School";
var results=text.search('Digital School');
document.getElementById("results1").innerHTML=results

var text="The best school in the world is Digital School";
var results=text.replace(/Digital School/,"another school");
document.getElementById("results2").innerHTML=results

var text="The best school in the world is Digital School";
var results=text.search(/Digital School/);
document.getElementById("results3").innerHTML=results

var teksti1="abcdef";
var result=new RegExp('abc')
document.getElementById("results4").innerHTML=result.test(teksti1)

var teksti2="My school is the best school in the world  ";
var result2=  /school/g
document.getElementById("results5").innerHTML=teksti2.match(result2)

var teksti3="My school is the best school in the world  ";
var result3=  /i/g
document.getElementById("results6").innerHTML=teksti3.match(result3)

var teksti4="My school is the best school in the world  ";
var result4=  /[abc ]/g
document.getElementById("results7").innerHTML=teksti4.match(result4)

var teksti5="My school is top 10 in the world";
var result5=  /[0-9]/g
document.getElementById("results8").innerHTML=teksti5.match(result5) 

var teksti5="My school is top best  in the world";
var result5=  /(top|best|world)/g
document.getElementById("results9").innerHTML=teksti5.match(result5)   

var teksti5="100 percent";
var result5=  /\d/g
document.getElementById("results10").innerHTML=teksti5.match(result5)   

var teksti5="My school is top best  in the world";
var result5=  /\s/g
document.getElementById("results11").innerHTML=teksti5.match(result5)  