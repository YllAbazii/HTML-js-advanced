function showMessage(){
    alert("this message is inside the funcion");
}

function showMessagetwo(){
    console.log("Hello there")
}
showMessagetwo()
showMessagetwo()
showMessagetwo()
showMessagetwo()
showMessagetwo()

function mbledhje(number1,number2){
    return number1 + number2
}

console.log( mbledhje(99,8))

function toCelcius(f){
    return(5/9)* (f-32);
}

console.log("99 fahrenhite is equal to" + toCelcius(99)+ "Celcius")

function toSeconds(minuta){
    return minuta*60
}

console.log("shendrrimi i minutave ne sekonda" + toSeconds(99))

function triangleArea(baseLengthe,height){
    return 0.5 *baseLengthe*height
}

console.log(triangleArea(8,9))

var car={
    name:"Mercedes",
    color:"Red",
    year:"2020",
    Kilometres:1000,

    startEngine: function(){
        alert("Vooom")
    },

    get getKilometra(){
        return this.Kilometres
    },
    get getName(){
        return this.name
    },
}

console.log(car.getname)
console.log(car.getKilometra)

alert(car.name)
alert(car.year)


var computer = new Object();

computer.name ="Lenovo";
computer.CPU ="intel core i7";
computer.RAM ="16GB";

computer.type = function(){
    return this.name + "," + this.CPU +"," +this.RAM;
}

alert(computer.type())
function Computer(name, CPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
}

var computer1=new Computer("Mac Book pro","m1 8 core","8gb");
var computer2=new Computer("Lenovo pro","m1 8 core","8gb");

console.log(computer1.name)