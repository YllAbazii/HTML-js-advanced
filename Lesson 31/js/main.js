var frutat =['molla','dardha','qershia']

for(var i=0; i<frutat.length; i++){
    console.log(frutat[i])
}


console.log('----------')

var e = 0;
do{
    e = e+1;
   console.log(e); 

}while(e<5)


console.log('----------')

var j = 0;
while(j<5){
   console.log(j);
    j=j+1;
}

var person={Firstname:'John',Lastname:'Doe',Age:25}

for(z in person){
    console.log(person[z])
}

for(z in frutat){
    console.log(frutat[z])
}

var teksti='javascript'

for(l of teksti){
    console.log(l)

}