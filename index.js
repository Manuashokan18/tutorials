// accessing elements using id class name and tag name
document.getElementById('h1').innerHTML = "hai manu";
document.getElementById('h2').innerHTML = "hai libin";
document.getElementsByClassName('h3')[0].innerHTML = "hai streben";
document.getElementsByClassName('h3')[1].innerHTML = "hai wesearch";

// accessing properties of css
document.getElementById('h1').style.color = "yellow";
document.getElementById('h2').style.color = "blue  ";
document.getElementsByClassName('h3')[0].style.color = "pink";
document.getElementsByClassName('h3')[1].style.color = "green";    

//variables
var text = document.getElementById('h1');
text.innerHTML = "hai manu ashokan";
text.style.color = "red";
text.style.fontSize = "55px";

//arithmetic operations
var a = 10;
var b = 15;
var c = a + b;
//var c = a - b;
//var c = a * b;
//var c = a / b;
//let and const
//let a=10;
//const a=15;

document.write(a);
document.write(b);
document.write(c);

//function
function addFun(x,y) {
    let a = x;
    let b = y;
    myFun();
    
    return(a + b);
    
}
console.log(addFun(50,50));
function myFun() {
    console.log("completed");
}


//arrow function
subFun =() => {
   let a = 20;
   let b = 10;
   return(a - b);
}
console.log(subFun());

//objects
let user = {
    firstName : 'Manu',
    lastName : 'Ashokan'
}
console.log(user.lastName);

//arrays
let myArray = ["manu","ashokan"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);

//string methods
let string = "ManuAshokan";
console.log(string.length);
console.log(string.indexOf("o"));
console.log(string.slice(0,4)); 
console.log(string.slice(4,11)); 

//number methods
let  n = "24";
console.log(string.slice(0,4)); 




