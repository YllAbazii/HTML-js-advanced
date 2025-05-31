
var programinglanguage=["Java","Jav","python"]

console.log(programinglanguage);
console.log(programinglanguage[1])


console.log(" kemi shtu nje element ne fund te listes")
programinglanguage.push('php')
console.log(programinglanguage);

console.log(" kemihek nje element ne fund te listes")
programinglanguage.pop()
console.log(programinglanguage)

console.log(" kemi shtu nje element ne fillim te listes")
programinglanguage.unshift('c#')
console.log(programinglanguage)

console.log(" kemi shtu nje element ne fillim te listes")
programinglanguage.shift()
console.log(programinglanguage)

programinglanguage.splice(0,2,'Ruby')

console.log(programinglanguage)

console.log(Math.random()*8)

console.log(Math.floor(Math.random()*5))

var students=["Jon","Dua"]
 var [s1,s2]= students

 console.log(s2)
 console.log(s1)

 var places=["Paris","London","NewYork","Munich"]

var [firstPalce, , secondPlace]=places

console.log(secondPlace)

var numbers=[1,2,3,4,5,6,7,8]

var [first,second, ...otherNumbers]=numbers
console.log(first)
console.log(second)
console.log(otherNumbers.toString())